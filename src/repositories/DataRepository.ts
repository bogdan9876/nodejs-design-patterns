class DataRepository {
    async get() {
        try {
            const { default: importData } = await import('../importData');
            return await importData();
        } catch (error) {
            console.error(error);
        }
    }
}

export default DataRepository;