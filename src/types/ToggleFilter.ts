/**
 * A definition of a Toggle State, which holds a reference
 * of a and a toggleable boolean attribute
 * to be used for filtering functions.
 *
 * @param T type of object to be used as filter
 * @author Bobby Plunkett
 * @version 1.0.0
 */
export interface ToggleFilter<T> {
    type: T,
    typeEnabled: boolean | 'skip',
    weaknessEnabled: boolean | 'skip'
}