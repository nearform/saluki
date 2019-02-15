import setupSpacing from './spacing'

export let spacing

export const init = customConfig => {
  if (customConfig.spacing) {
    spacing = setupSpacing(customConfig.spacing)
  }
}
