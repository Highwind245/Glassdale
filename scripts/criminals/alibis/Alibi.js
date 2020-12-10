export const AlibiHTMLConverter = (alibiObject) => {
    return `
        <section class="alibi">
            <div class="associate__name">Associate: ${alibiObject.name}</div>
            <div class="associate__alibi">Alibi:${alibiObject.alibi}</div>
        </section>
    `
}
