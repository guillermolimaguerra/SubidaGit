/*!   GeneXus Java 15_0_10-123190 on October 17, 2018 23:49:59.56
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.exportoptions', false, function () {
   this.ServerClass =  "wwpbaseobjects.exportoptions" ;
   this.PackageName =  "com.sinapsis.normativa" ;
   this.setObjectType("web");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.SetStandaloneVars=function()
   {
      this.AV14GoogleDocResultXML=gx.fn.getControlValue("vGOOGLEDOCRESULTXML") ;
      this.AV12ExcelFileName=gx.fn.getControlValue("vEXCELFILENAME") ;
      this.AV9DefaultTitle=gx.fn.getControlValue("vDEFAULTTITLE") ;
   };
   this.Validv_Exporttype=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEXPORTTYPE");
         this.AnyError  = 0;
         if ( ! ( ( this.AV13ExportType == 1 ) || ( this.AV13ExportType == 2 ) ) )
         {
            try {
               gxballoon.setError("Campo Export Type fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e15081_client=function()
   {
      this.clearMessages();
      if ( this.AV13ExportType == 2 )
      {
         gx.fn.setCtrlProperty("TABLEGOOGLEDRIVEINFO","Visible", true );
         gx.fn.setCtrlProperty("BTNDOWNLOADTOFILE","Visible", false );
         gx.fn.setCtrlProperty("BTNSAVEGOOGLEDRIVE","Visible", true );
      }
      else
      {
         gx.fn.setCtrlProperty("TABLEGOOGLEDRIVEINFO","Visible", false );
         gx.fn.setCtrlProperty("BTNDOWNLOADTOFILE","Visible", true );
         gx.fn.setCtrlProperty("BTNSAVEGOOGLEDRIVE","Visible", false );
      }
      this.refreshOutputs([{av:'gx.fn.getCtrlProperty("TABLEGOOGLEDRIVEINFO","Visible")',ctrl:'TABLEGOOGLEDRIVEINFO',prop:'Visible'},{ctrl:'BTNDOWNLOADTOFILE',prop:'Visible'},{ctrl:'BTNSAVEGOOGLEDRIVE',prop:'Visible'}]);
      return $.Deferred().resolve();
   };
   this.e12082_client=function()
   {
      return this.executeServerEvent("'DODOWNLOADTOFILE'", false, null, false, false);
   };
   this.e13082_client=function()
   {
      return this.executeServerEvent("'DOSAVEGOOGLEDRIVE'", false, null, false, false);
   };
   this.e16082_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e17081_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,11,16,17,18,19,20,21,22,23,26,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,51,57,58,59,60];
   this.GXLastCtrlId =60;
   this.INNEWWINDOW1Container = gx.uc.getNew(this, 54, 23, "InNewWindow", "INNEWWINDOW1Container", "Innewwindow1", "INNEWWINDOW1");
   var INNEWWINDOW1Container = this.INNEWWINDOW1Container;
   INNEWWINDOW1Container.setProp("Class", "Class", "", "char");
   INNEWWINDOW1Container.setProp("Enabled", "Enabled", true, "boolean");
   INNEWWINDOW1Container.setDynProp("Width", "Width", "50", "str");
   INNEWWINDOW1Container.setDynProp("Height", "Height", "50", "str");
   INNEWWINDOW1Container.setProp("Name", "Name", "", "str");
   INNEWWINDOW1Container.setDynProp("Target", "Target", "", "str");
   INNEWWINDOW1Container.setProp("Fullscreen", "Fullscreen", false, "bool");
   INNEWWINDOW1Container.setProp("Location", "Location", true, "bool");
   INNEWWINDOW1Container.setProp("MenuBar", "Menubar", true, "bool");
   INNEWWINDOW1Container.setProp("Resizable", "Resizable", true, "bool");
   INNEWWINDOW1Container.setProp("Scrollbars", "Scrollbars", true, "bool");
   INNEWWINDOW1Container.setProp("TitleBar", "Titlebar", true, "bool");
   INNEWWINDOW1Container.setProp("ToolBar", "Toolbar", true, "bool");
   INNEWWINDOW1Container.setProp("directories", "Directories", true, "bool");
   INNEWWINDOW1Container.setProp("status", "Status", true, "bool");
   INNEWWINDOW1Container.setProp("copyhistory", "Copyhistory", true, "bool");
   INNEWWINDOW1Container.setProp("top", "Top", "5", "str");
   INNEWWINDOW1Container.setProp("left", "Left", "5", "str");
   INNEWWINDOW1Container.setProp("fitscreen", "Fitscreen", false, "bool");
   INNEWWINDOW1Container.setProp("RefreshParentOnClose", "Refreshparentonclose", false, "bool");
   INNEWWINDOW1Container.setProp("Targets", "Targets", '', "str");
   INNEWWINDOW1Container.setProp("Visible", "Visible", true, "bool");
   INNEWWINDOW1Container.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(INNEWWINDOW1Container);
   this.DVPANEL_TABLEEXPORTContainer = gx.uc.getNew(this, 14, 0, "BootstrapPanel", "DVPANEL_TABLEEXPORTContainer", "Dvpanel_tableexport", "DVPANEL_TABLEEXPORT");
   var DVPANEL_TABLEEXPORTContainer = this.DVPANEL_TABLEEXPORTContainer;
   DVPANEL_TABLEEXPORTContainer.setProp("Class", "Class", "", "char");
   DVPANEL_TABLEEXPORTContainer.setProp("Enabled", "Enabled", true, "boolean");
   DVPANEL_TABLEEXPORTContainer.setProp("Width", "Width", "100%", "str");
   DVPANEL_TABLEEXPORTContainer.setProp("Height", "Height", "100", "str");
   DVPANEL_TABLEEXPORTContainer.setProp("AutoWidth", "Autowidth", false, "bool");
   DVPANEL_TABLEEXPORTContainer.setProp("AutoHeight", "Autoheight", true, "bool");
   DVPANEL_TABLEEXPORTContainer.setProp("Cls", "Cls", "PanelCard_BaseColor", "str");
   DVPANEL_TABLEEXPORTContainer.setProp("ShowHeader", "Showheader", true, "bool");
   DVPANEL_TABLEEXPORTContainer.setProp("Title", "Title", "Dónde exportar?", "str");
   DVPANEL_TABLEEXPORTContainer.setProp("Collapsible", "Collapsible", false, "bool");
   DVPANEL_TABLEEXPORTContainer.setProp("Collapsed", "Collapsed", false, "bool");
   DVPANEL_TABLEEXPORTContainer.setProp("ShowCollapseIcon", "Showcollapseicon", false, "bool");
   DVPANEL_TABLEEXPORTContainer.setProp("IconPosition", "Iconposition", "left", "str");
   DVPANEL_TABLEEXPORTContainer.setProp("AutoScroll", "Autoscroll", false, "bool");
   DVPANEL_TABLEEXPORTContainer.setProp("Visible", "Visible", true, "bool");
   DVPANEL_TABLEEXPORTContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(DVPANEL_TABLEEXPORTContainer);
   this.DVPANEL_TABLEATTRIBUTESContainer = gx.uc.getNew(this, 29, 23, "BootstrapPanel", "DVPANEL_TABLEATTRIBUTESContainer", "Dvpanel_tableattributes", "DVPANEL_TABLEATTRIBUTES");
   var DVPANEL_TABLEATTRIBUTESContainer = this.DVPANEL_TABLEATTRIBUTESContainer;
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Class", "Class", "", "char");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Enabled", "Enabled", true, "boolean");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Width", "Width", "100%", "str");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Height", "Height", "100", "str");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("AutoWidth", "Autowidth", false, "bool");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("AutoHeight", "Autoheight", true, "bool");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Cls", "Cls", "PanelCard_BaseColor", "str");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("ShowHeader", "Showheader", true, "bool");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Title", "Title", "Información de Google Drive", "str");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Collapsible", "Collapsible", false, "bool");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Collapsed", "Collapsed", false, "bool");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("ShowCollapseIcon", "Showcollapseicon", false, "bool");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("IconPosition", "Iconposition", "left", "str");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("AutoScroll", "Autoscroll", false, "bool");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Visible", "Visible", true, "bool");
   DVPANEL_TABLEATTRIBUTESContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(DVPANEL_TABLEATTRIBUTESContainer);
   GXValidFnc[2]={ id: 2, fld:"TABLEMAIN",grid:0};
   GXValidFnc[5]={ id: 5, fld:"JS", format:2,grid:0};
   GXValidFnc[11]={ id: 11, fld:"TABLECONTENT",grid:0};
   GXValidFnc[16]={ id: 16, fld:"LAYOUT_TABLEEXPORT",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"TABLEEXPORT",grid:0};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id:23 ,lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Exporttype,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vEXPORTTYPE",gxz:"ZV13ExportType",gxold:"OV13ExportType",gxvar:"AV13ExportType",ucs:[],op:[23],ip:[23],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV13ExportType=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV13ExportType=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vEXPORTTYPE",gx.O.AV13ExportType);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV13ExportType=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vEXPORTTYPE",'.')},nac:gx.falseFn,evt:"e15081_client"};
   this.declareDomainHdlr( 23 , function() {
   });
   GXValidFnc[26]={ id: 26, fld:"TABLEGOOGLEDRIVEINFO",grid:0};
   GXValidFnc[31]={ id: 31, fld:"LAYOUT_TABLEATTRIBUTES",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"TABLEATTRIBUTES",grid:0};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id:38 ,lvl:0,type:"char",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSER",gxz:"ZV22User",gxold:"OV22User",gxvar:"AV22User",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV22User=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV22User=Value},v2c:function(){gx.fn.setControlValue("vUSER",gx.O.AV22User,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV22User=this.val()},val:function(){return gx.fn.getControlValue("vUSER")},nac:gx.falseFn};
   this.declareDomainHdlr( 38 , function() {
   });
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id:43 ,lvl:0,type:"char",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDOCTITLE",gxz:"ZV5DocTitle",gxold:"OV5DocTitle",gxvar:"AV5DocTitle",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV5DocTitle=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV5DocTitle=Value},v2c:function(){gx.fn.setControlValue("vDOCTITLE",gx.O.AV5DocTitle,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV5DocTitle=this.val()},val:function(){return gx.fn.getControlValue("vDOCTITLE")},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id:48 ,lvl:0,type:"char",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPASSWORD",gxz:"ZV20Password",gxold:"OV20Password",gxvar:"AV20Password",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV20Password=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV20Password=Value},v2c:function(){gx.fn.setControlValue("vPASSWORD",gx.O.AV20Password,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV20Password=this.val()},val:function(){return gx.fn.getControlValue("vPASSWORD")},nac:gx.falseFn};
   this.declareDomainHdlr( 48 , function() {
   });
   GXValidFnc[51]={ id: 51, fld:"UT",grid:0};
   GXValidFnc[57]={ id: 57, fld:"ACTIONGROUP_ACTIONS",grid:0};
   GXValidFnc[58]={ id: 58, fld:"BTNDOWNLOADTOFILE",grid:0};
   GXValidFnc[59]={ id: 59, fld:"BTNSAVEGOOGLEDRIVE",grid:0};
   GXValidFnc[60]={ id: 60, fld:"BTNCANCEL",grid:0};
   this.AV13ExportType = 0 ;
   this.ZV13ExportType = 0 ;
   this.OV13ExportType = 0 ;
   this.AV22User = "" ;
   this.ZV22User = "" ;
   this.OV22User = "" ;
   this.AV5DocTitle = "" ;
   this.ZV5DocTitle = "" ;
   this.OV5DocTitle = "" ;
   this.AV20Password = "" ;
   this.ZV20Password = "" ;
   this.OV20Password = "" ;
   this.AV13ExportType = 0 ;
   this.AV22User = "" ;
   this.AV5DocTitle = "" ;
   this.AV20Password = "" ;
   this.AV12ExcelFileName = "" ;
   this.AV9DefaultTitle = "" ;
   this.AV14GoogleDocResultXML = "" ;
   this.Events = {"e12082_client": ["'DODOWNLOADTOFILE'", true] ,"e13082_client": ["'DOSAVEGOOGLEDRIVE'", true] ,"e16082_client": ["ENTER", true] ,"e17081_client": ["CANCEL", true] ,"e15081_client": ["VEXPORTTYPE.CLICK", false]};
   this.EvtParms["REFRESH"] = [[{av:'AV12ExcelFileName',fld:'vEXCELFILENAME',pic:'',hsh:true,nv:''},{av:'AV9DefaultTitle',fld:'vDEFAULTTITLE',pic:'',hsh:true,nv:''}],[]];
   this.EvtParms["START"] = [[{av:'AV9DefaultTitle',fld:'vDEFAULTTITLE',pic:'',hsh:true,nv:''},{av:'AV12ExcelFileName',fld:'vEXCELFILENAME',pic:'',hsh:true,nv:''}],[{av:'gx.fn.getCtrlProperty("TABLECONTENT","Height")',ctrl:'TABLECONTENT',prop:'Height'},{av:'AV5DocTitle',fld:'vDOCTITLE',pic:'',nv:''},{av:'gx.fn.getCtrlProperty("vPASSWORD","Ispassword")',ctrl:'vPASSWORD',prop:'Ispassword'},{av:'gx.fn.getCtrlProperty("TABLEGOOGLEDRIVEINFO","Visible")',ctrl:'TABLEGOOGLEDRIVEINFO',prop:'Visible'},{ctrl:'BTNSAVEGOOGLEDRIVE',prop:'Visible'},{ctrl:'BTNDOWNLOADTOFILE',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'}]];
   this.EvtParms["'DODOWNLOADTOFILE'"] = [[],[]];
   this.EvtParms["'DOSAVEGOOGLEDRIVE'"] = [[{av:'AV14GoogleDocResultXML',fld:'vGOOGLEDOCRESULTXML',pic:'',nv:''}],[{av:'this.INNEWWINDOW1Container.Target',ctrl:'INNEWWINDOW1',prop:'Target'},{av:'this.INNEWWINDOW1Container.Height',ctrl:'INNEWWINDOW1',prop:'Height'},{av:'this.INNEWWINDOW1Container.Width',ctrl:'INNEWWINDOW1',prop:'Width'},{ctrl:'BTNCANCEL',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TABLECONTENT","Visible")',ctrl:'TABLECONTENT',prop:'Visible'},{ctrl:'BTNDOWNLOADTOFILE',prop:'Visible'},{ctrl:'BTNSAVEGOOGLEDRIVE',prop:'Visible'}]];
   this.EvtParms["VEXPORTTYPE.CLICK"] = [[{ctrl:'vEXPORTTYPE'},{av:'AV13ExportType',fld:'vEXPORTTYPE',pic:'9',nv:0}],[{av:'gx.fn.getCtrlProperty("TABLEGOOGLEDRIVEINFO","Visible")',ctrl:'TABLEGOOGLEDRIVEINFO',prop:'Visible'},{ctrl:'BTNDOWNLOADTOFILE',prop:'Visible'},{ctrl:'BTNSAVEGOOGLEDRIVE',prop:'Visible'}]];
   this.setVCMap("AV14GoogleDocResultXML", "vGOOGLEDOCRESULTXML", 0, "vchar");
   this.setVCMap("AV12ExcelFileName", "vEXCELFILENAME", 0, "svchar");
   this.setVCMap("AV9DefaultTitle", "vDEFAULTTITLE", 0, "char");
   this.Initialize( );
});
gx.createParentObj(wwpbaseobjects.exportoptions);
