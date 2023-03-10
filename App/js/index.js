// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block6")
                .setLeft("1.5238095238095237em")
                .setTop("0.7619047619047619em")
                .setWidth("28.266666666666666em")
                .setHeight("11.504761904761905em")
                .setHtml("<iframe width=\"400\" height=\"200\" src=\"https://tradinvgview.com\" name=\"iframe\" scrolling=\"no\">\n</iframe>\n\n")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#BFACFF",
                        "background-color" : "#BFACFF"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block7")
                .setLeft("31.238095238095237em")
                .setTop("0.7619047619047619em")
                .setWidth("28.266666666666666em")
                .setHeight("11.504761904761905em")
            );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block8")
                .setLeft("1.5238095238095237em")
                .setTop("12.952380952380953em")
                .setWidth("28.266666666666666em")
                .setHeight("11.504761904761905em")
            );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block9")
                .setLeft("31.238095238095237em")
                .setTop("12.952380952380953em")
                .setWidth("28.266666666666666em")
                .setHeight("11.504761904761905em")
            );
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div24")
                .setLocked(true)
                .setLeft("6.857142857142857em")
                .setTop("28.19047619047619em")
                .setWidth("30.552380952380954em")
                .setHeight("15.314285714285715em")
                .setHtml("<iframe width=\"400\" height=\"200\" src=\"https://tradinvgview.com\" name=\"iframe\" scrolling=\"no\">\n</iframe>\n")
                .setIframeAutoLoad("<iframe width=\"400\" height=\"200\" src=\"https://tradinvgview.com\" name=\"iframe\" scrolling=\"no\"> </iframe>")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});