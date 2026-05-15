/*!   GeneXus Java 15_0_10-123190 on October 17, 2018 23:50:29.48
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.savefilteras', false, function () {
   this.ServerClass =  "wwpbaseobjects.savefilteras" ;
   this.PackageName =  "com.sinapsis.normativa" ;
   this.setObjectType("web");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.SetStandaloneVars=function()
   {
      this.AV15UserKey=gx.fn.getControlValue("vUSERKEY") ;
      this.AV5GridStateKey=gx.fn.getControlValue("vGRIDSTATEKEY") ;
   };
   this.e120c2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e140c1_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,11,13,16,17,18];
   this.GXLastCtrlId =18;
   GXValidFnc[2]={ id: 2, fld:"TABLEMAIN",grid:0};
   GXValidFnc[8]={ id: 8, fld:"TABLECONTENT",grid:0};
   GXValidFnc[11]={ id: 11, fld:"TEXTBLOCKFILTERNAME", format:0,grid:0};
   GXValidFnc[13]={ id:13 ,lvl:0,type:"char",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vFILTERNAME",gxz:"ZV8FilterName",gxold:"OV8FilterName",gxvar:"AV8FilterName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV8FilterName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV8FilterName=Value},v2c:function(){gx.fn.setControlValue("vFILTERNAME",gx.O.AV8FilterName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV8FilterName=this.val()},val:function(){return gx.fn.getControlValue("vFILTERNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 13 , function() {
   });
   GXValidFnc[16]={ id: 16, fld:"ACTIONGROUP_ACTIONS",grid:0};
   GXValidFnc[17]={ id: 17, fld:"BTNENTER",grid:0};
   GXValidFnc[18]={ id: 18, fld:"BTNCANCEL",grid:0};
   this.AV8FilterName = "" ;
   this.ZV8FilterName = "" ;
   this.OV8FilterName = "" ;
   this.AV8FilterName = "" ;
   this.AV15UserKey = "" ;
   this.AV5GridStateKey = "" ;
   this.Events = {"e120c2_client": ["ENTER", true] ,"e140c1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV15UserKey',fld:'vUSERKEY',pic:'',hsh:true,nv:''},{av:'AV5GridStateKey',fld:'vGRIDSTATEKEY',pic:'',hsh:true,nv:''}],[]];
   this.EvtParms["START"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV8FilterName',fld:'vFILTERNAME',pic:'',nv:''},{av:'AV15UserKey',fld:'vUSERKEY',pic:'',hsh:true,nv:''},{av:'AV5GridStateKey',fld:'vGRIDSTATEKEY',pic:'',hsh:true,nv:''}],[{av:'AV8FilterName',fld:'vFILTERNAME',pic:'',nv:''}]];
   this.EnterCtrl = ["BTNENTER"];
   this.setVCMap("AV15UserKey", "vUSERKEY", 0, "svchar");
   this.setVCMap("AV5GridStateKey", "vGRIDSTATEKEY", 0, "svchar");
   this.Initialize( );
});
gx.createParentObj(wwpbaseobjects.savefilteras);
