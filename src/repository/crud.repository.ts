export abstract class CrudRepository<T, S extends number | string> {

    protected readonly db;

    protected constructor(db) {
        this.db = db;
    }

    abstract findAll()

    abstract findById(id: S): Promise<T>

    abstract updateOne()


}