/**
 * A definition of a Toggle State, which holds two references for
 * both type and weakness attributes. This allows the same state
 * object to be reused.
 *
 * @param T type of object to be used as filter
 * @author Bobby Plunkett
 * @version 1.0.0
 */
export interface ToggleFilter<T> {
    type: T;
    typeEnabled: boolean | 'skip';
    weaknessEnabled: boolean | 'skip';
}
