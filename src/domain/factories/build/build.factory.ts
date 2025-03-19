export abstract class BuildFactory<TBuilder, TData> {
  abstract create(): TBuilder;
  abstract configureBuilder(data: TData): Promise<TBuilder>;
}