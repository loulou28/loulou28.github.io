class LearnSeoul {
    constructor(httpClient) {
        this.learnseoul = httpClient;
    }

    async education() {
        const response = await this.learnseoul.get('');
        return response.data.ListPublicReservationEducation.row;
    }
}

export default LearnSeoul;