document.querySelectorAll( `.form-button.is-submit` ).forEach( button => {
  button.addEventListener( `click`, e => {
    e.preventDefault()

    let form = button.parentElement

    while (form.tagName != `FORM`) form = form.parentElement

    const { red, green, blue, alpha } = form.elements

    const alphaSaturation = red.checked || green.checked || blue.checked ? `8` : `0`

    form.querySelectorAll( `.form-colors-wrapper > div` ).forEach( wrapper => {
      wrapper.style.backgroundColor = `#`
        + (red.checked   ? `f` : `0`)
        + (green.checked ? `f` : `0`)
        + (blue.checked  ? `f` : `0`)
        + (alpha.checked ? alphaSaturation : `f`)
    } )
  } )
} )