import { defineStore } from "pinia";
import axios from "axios";

// 1) Создаем axios-инстанс
const apiClient = axios.create({
    baseURL: "https://kitanik.io",
    // 2) Добавляем хедер авторизации
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJraGFsaWtoYWxpa0BtYWlsLnJ1IiwiZXhwIjoxNzQwMDc1NzUxfQ.ad5ldkpBTCMMgBjUhRmgB522mYg1Dlyhx7ZTMzdmoeQ"
    }
});

export const useCreateAIStore = defineStore('createAIStore', {
    state: () => ({
        ideaId: -1, // Храним текущий ID идеи
    }),
    actions: {
        /**
         * Получение текущего ID идеи.
         */
        async fetchCurrentIdeaId() {
            try {
                const response = await apiClient.get("/ideas/ai/get_current_idea");
                if (response.data && typeof response.data === "number") {
                    this.ideaId = response.data;
                    return response.data;
                } else {
                    throw new Error("Некорректный формат ответа от сервера.");
                }
            } catch (error) {
                console.error("fetchCurrentIdeaId error:", error);
                throw error;
            }
        },

        /**
         * Отправка сообщения (new_message).
         */
        async sendMsg(message: string) {
            try {
                const formData = new FormData();
                formData.append("message", message);

                const response = await apiClient.post("/ideas/ai/new_message", formData, {
                    headers: { "Content-Type": "multipart/form-data" }
                });

                return response.data;
            } catch (error) {
                console.error("sendMsg error:", error);
                throw error;
            }
        },

        /**
         * Шорт-поллинг (check).
         */
        async poll() {
            try {
                if (this.ideaId === -1) {
                    console.warn("poll: ideaId не установлен. Попытка получить...");
                    await this.fetchCurrentIdeaId();
                }

                const response = await apiClient.get(`/ideas/ai/check?idea_id=${this.ideaId}`);
                return response.data;
            } catch (error) {
                console.error("poll error:", error);
                throw error;
            }
        },

        /**
         * Загрузка файла и автоматическое скачивание.
         */
        async downloadFile() {
            try {
                if (this.ideaId === -1) {
                    console.warn("downloadFile: ideaId не установлен. Попытка получить...");
                    await this.fetchCurrentIdeaId();
                }

                const response = await apiClient.get(`/ideas/ai/get_file?idea_id=${this.ideaId}`, {
                    responseType: "blob"
                });

                // Создаем ссылку для скачивания файла
                const blob = new Blob([response.data], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", `idea_${this.ideaId}.docx`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } catch (error) {
                console.error("downloadFile error:", error);
                throw error;
            }
        },

        /**
         * Сброс данных чата (reset).
         */
        async reset() {
            try {
                const response = await apiClient.get("/ideas/ai/reset");
                return response.data;
            } catch (error) {
                console.error("reset error:", error);
                throw error;
            }
        }
    }
});
