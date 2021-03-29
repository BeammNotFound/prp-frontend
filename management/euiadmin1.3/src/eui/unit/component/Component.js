
export default {
    Tinymce:resolve=>{require(['@/eui/unit/tool/Tinymce'],resolve)},//富文本编辑器
    ImportExcel:resolve=>{require(['@/eui/unit/tool/excel/ImportExcel.vue'],resolve)},//导入数据
    OutEXcel:resolve=>{require(['@/eui/unit/tool/excel/OutEXcel.vue'],resolve)},//导出数据
    EuiTable:resolve=>{require(['@/eui/unit/tool/EuiTable.vue'],resolve)},//eui表格
    Eicon:resolve=>{require(['@/eui/unit/tool/form/Icon.vue'],resolve)},//eui表格
    Passwordcheck:resolve=>{require(['@/eui/unit/tool/form/Passwordcheck.vue'],resolve)},//eui表格
}