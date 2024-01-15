//Random color generator
export const generateRandomColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
}

//Getting element width 
export const getContentWidth = (element) => {
    var styles = getComputedStyle(element)

    return element.clientWidth
        - parseFloat(styles.paddingLeft)
        - parseFloat(styles.paddingRight)
}

//Getting element height
export const getContentHeight = (element) => {
    var styles = getComputedStyle(element)

    return element.clientHeight
        - parseFloat(styles.paddingTop)
        - parseFloat(styles.paddingBottom)
}

//Getting random points according to element 
export const getRandomPoints = (element, xConstraint = 0, yConstraint = 0, minLeft = 0, minTop = 0) => {
    const left = Math.max(Math.random() * getContentWidth(element) - xConstraint, minLeft);
    const top = Math.max(Math.random() * getContentHeight(element) - yConstraint, minTop);

    return { left, top };
}