/*!   GeneXus Java 15_0_10-123190 on July 2, 2019 14:19:40.60
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.addressdisplay', false, function () {
   this.ServerClass =  "wwpbaseobjects.addressdisplay" ;
   this.PackageName =  "com.sinapsis.normativa" ;
   this.setObjectType("web");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.SetStandaloneVars=function()
   {
      this.AV5Address=gx.fn.getControlValue("vADDRESS") ;
      this.AV6Geolocation=gx.fn.getControlValue("vGEOLOCATION") ;
   };
   this.e13072_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14072_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5];
   this.GXLastCtrlId =5;
   GXValidFnc[2]={ id: 2, fld:"TABLEMAIN",grid:0};
   GXValidFnc[5]={ id: 5, fld:"UTEMBEDDEDPAGE",grid:0};
   this.AV5Address = "" ;
   this.AV6Geolocation = "" ;
   this.Events = {"e13072_client": ["ENTER", true] ,"e14072_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV5Address',fld:'vADDRESS',pic:'',hsh:true,nv:''},{av:'AV6Geolocation',fld:'vGEOLOCATION',pic:'',hsh:true,nv:''}],[]];
   this.EvtParms["START"] = [[{av:'AV5Address',fld:'vADDRESS',pic:'',hsh:true,nv:''},{av:'AV6Geolocation',fld:'vGEOLOCATION',pic:'',hsh:true,nv:''}],[{ctrl:'GOOGLEMAPSEMBPAGE',prop:'Source'}]];
   this.setVCMap("AV5Address", "vADDRESS", 0, "svchar");
   this.setVCMap("AV6Geolocation", "vGEOLOCATION", 0, "svchar");
   this.Initialize( );
});
gx.createParentObj(wwpbaseobjects.addressdisplay);
