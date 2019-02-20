export const state = () => ({
  logoText: "ctexxx"
});

export const mutations = {
  setLogoText(state, value) {
    state.logoText = value;
  },
  resetLogoText(state) {
    state.logoText = "ctexxx";
  }
};
