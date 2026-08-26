# `chronicleBigQueryExport` Submodule <a name="`chronicleBigQueryExport` Submodule" id="@cdktn/provider-google.chronicleBigQueryExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleBigQueryExport <a name="ChronicleBigQueryExport" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export google_chronicle_big_query_export}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer"></a>

```python
from cdktn_provider_google import chronicle_big_query_export

chronicleBigQueryExport.ChronicleBigQueryExport(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance: str,
  location: str,
  big_query_export_package: str = None,
  entity_graph_settings: ChronicleBigQueryExportEntityGraphSettings = None,
  id: str = None,
  ioc_matches_settings: ChronicleBigQueryExportIocMatchesSettings = None,
  project: str = None,
  rule_detections_settings: ChronicleBigQueryExportRuleDetectionsSettings = None,
  timeouts: ChronicleBigQueryExportTimeouts = None,
  udm_events_aggregates_settings: ChronicleBigQueryExportUdmEventsAggregatesSettings = None,
  udm_events_settings: ChronicleBigQueryExportUdmEventsSettings = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.instance">instance</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.bigQueryExportPackage">big_query_export_package</a></code> | <code>str</code> | The BigQueryExportPackage entitled for the Chronicle instance. Possible values: ["BIG_QUERY_EXPORT_PACKAGE_BYOBQ", "BIG_QUERY_EXPORT_PACKAGE_ADVANCED"]. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.entityGraphSettings">entity_graph_settings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings">ChronicleBigQueryExportEntityGraphSettings</a></code> | entity_graph_settings block. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#id ChronicleBigQueryExport#id}. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.iocMatchesSettings">ioc_matches_settings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings">ChronicleBigQueryExportIocMatchesSettings</a></code> | ioc_matches_settings block. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#project ChronicleBigQueryExport#project}. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.ruleDetectionsSettings">rule_detections_settings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings">ChronicleBigQueryExportRuleDetectionsSettings</a></code> | rule_detections_settings block. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts">ChronicleBigQueryExportTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.udmEventsAggregatesSettings">udm_events_aggregates_settings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings">ChronicleBigQueryExportUdmEventsAggregatesSettings</a></code> | udm_events_aggregates_settings block. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.udmEventsSettings">udm_events_settings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings">ChronicleBigQueryExportUdmEventsSettings</a></code> | udm_events_settings block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.instance"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#instance ChronicleBigQueryExport#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#location ChronicleBigQueryExport#location}

---

##### `big_query_export_package`<sup>Optional</sup> <a name="big_query_export_package" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.bigQueryExportPackage"></a>

- *Type:* str

The BigQueryExportPackage entitled for the Chronicle instance. Possible values: ["BIG_QUERY_EXPORT_PACKAGE_BYOBQ", "BIG_QUERY_EXPORT_PACKAGE_ADVANCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#big_query_export_package ChronicleBigQueryExport#big_query_export_package}

---

##### `entity_graph_settings`<sup>Optional</sup> <a name="entity_graph_settings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.entityGraphSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings">ChronicleBigQueryExportEntityGraphSettings</a>

entity_graph_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#entity_graph_settings ChronicleBigQueryExport#entity_graph_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#id ChronicleBigQueryExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ioc_matches_settings`<sup>Optional</sup> <a name="ioc_matches_settings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.iocMatchesSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings">ChronicleBigQueryExportIocMatchesSettings</a>

ioc_matches_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#ioc_matches_settings ChronicleBigQueryExport#ioc_matches_settings}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#project ChronicleBigQueryExport#project}.

---

##### `rule_detections_settings`<sup>Optional</sup> <a name="rule_detections_settings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.ruleDetectionsSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings">ChronicleBigQueryExportRuleDetectionsSettings</a>

rule_detections_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#rule_detections_settings ChronicleBigQueryExport#rule_detections_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts">ChronicleBigQueryExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#timeouts ChronicleBigQueryExport#timeouts}

---

##### `udm_events_aggregates_settings`<sup>Optional</sup> <a name="udm_events_aggregates_settings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.udmEventsAggregatesSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings">ChronicleBigQueryExportUdmEventsAggregatesSettings</a>

udm_events_aggregates_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#udm_events_aggregates_settings ChronicleBigQueryExport#udm_events_aggregates_settings}

---

##### `udm_events_settings`<sup>Optional</sup> <a name="udm_events_settings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.udmEventsSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings">ChronicleBigQueryExportUdmEventsSettings</a>

udm_events_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#udm_events_settings ChronicleBigQueryExport#udm_events_settings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putEntityGraphSettings">put_entity_graph_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putIocMatchesSettings">put_ioc_matches_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putRuleDetectionsSettings">put_rule_detections_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putUdmEventsAggregatesSettings">put_udm_events_aggregates_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putUdmEventsSettings">put_udm_events_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetBigQueryExportPackage">reset_big_query_export_package</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetEntityGraphSettings">reset_entity_graph_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetIocMatchesSettings">reset_ioc_matches_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetRuleDetectionsSettings">reset_rule_detections_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetUdmEventsAggregatesSettings">reset_udm_events_aggregates_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetUdmEventsSettings">reset_udm_events_settings</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_entity_graph_settings` <a name="put_entity_graph_settings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putEntityGraphSettings"></a>

```python
def put_entity_graph_settings(
  enabled: bool | IResolvable,
  retention_days: typing.Union[int, float]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putEntityGraphSettings.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#enabled ChronicleBigQueryExport#enabled}

---

###### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putEntityGraphSettings.parameter.retentionDays"></a>

- *Type:* typing.Union[int, float]

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#retention_days ChronicleBigQueryExport#retention_days}

---

##### `put_ioc_matches_settings` <a name="put_ioc_matches_settings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putIocMatchesSettings"></a>

```python
def put_ioc_matches_settings(
  enabled: bool | IResolvable,
  retention_days: typing.Union[int, float]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putIocMatchesSettings.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#enabled ChronicleBigQueryExport#enabled}

---

###### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putIocMatchesSettings.parameter.retentionDays"></a>

- *Type:* typing.Union[int, float]

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#retention_days ChronicleBigQueryExport#retention_days}

---

##### `put_rule_detections_settings` <a name="put_rule_detections_settings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putRuleDetectionsSettings"></a>

```python
def put_rule_detections_settings(
  enabled: bool | IResolvable,
  retention_days: typing.Union[int, float]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putRuleDetectionsSettings.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#enabled ChronicleBigQueryExport#enabled}

---

###### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putRuleDetectionsSettings.parameter.retentionDays"></a>

- *Type:* typing.Union[int, float]

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#retention_days ChronicleBigQueryExport#retention_days}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#create ChronicleBigQueryExport#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#delete ChronicleBigQueryExport#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#update ChronicleBigQueryExport#update}.

---

##### `put_udm_events_aggregates_settings` <a name="put_udm_events_aggregates_settings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putUdmEventsAggregatesSettings"></a>

```python
def put_udm_events_aggregates_settings(
  enabled: bool | IResolvable,
  retention_days: typing.Union[int, float]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putUdmEventsAggregatesSettings.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#enabled ChronicleBigQueryExport#enabled}

---

###### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putUdmEventsAggregatesSettings.parameter.retentionDays"></a>

- *Type:* typing.Union[int, float]

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#retention_days ChronicleBigQueryExport#retention_days}

---

##### `put_udm_events_settings` <a name="put_udm_events_settings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putUdmEventsSettings"></a>

```python
def put_udm_events_settings(
  enabled: bool | IResolvable,
  retention_days: typing.Union[int, float]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putUdmEventsSettings.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#enabled ChronicleBigQueryExport#enabled}

---

###### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putUdmEventsSettings.parameter.retentionDays"></a>

- *Type:* typing.Union[int, float]

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#retention_days ChronicleBigQueryExport#retention_days}

---

##### `reset_big_query_export_package` <a name="reset_big_query_export_package" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetBigQueryExportPackage"></a>

```python
def reset_big_query_export_package() -> None
```

##### `reset_entity_graph_settings` <a name="reset_entity_graph_settings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetEntityGraphSettings"></a>

```python
def reset_entity_graph_settings() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ioc_matches_settings` <a name="reset_ioc_matches_settings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetIocMatchesSettings"></a>

```python
def reset_ioc_matches_settings() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_rule_detections_settings` <a name="reset_rule_detections_settings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetRuleDetectionsSettings"></a>

```python
def reset_rule_detections_settings() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_udm_events_aggregates_settings` <a name="reset_udm_events_aggregates_settings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetUdmEventsAggregatesSettings"></a>

```python
def reset_udm_events_aggregates_settings() -> None
```

##### `reset_udm_events_settings` <a name="reset_udm_events_settings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetUdmEventsSettings"></a>

```python
def reset_udm_events_settings() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ChronicleBigQueryExport resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.isConstruct"></a>

```python
from cdktn_provider_google import chronicle_big_query_export

chronicleBigQueryExport.ChronicleBigQueryExport.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.isTerraformElement"></a>

```python
from cdktn_provider_google import chronicle_big_query_export

chronicleBigQueryExport.ChronicleBigQueryExport.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.isTerraformResource"></a>

```python
from cdktn_provider_google import chronicle_big_query_export

chronicleBigQueryExport.ChronicleBigQueryExport.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.generateConfigForImport"></a>

```python
from cdktn_provider_google import chronicle_big_query_export

chronicleBigQueryExport.ChronicleBigQueryExport.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ChronicleBigQueryExport resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ChronicleBigQueryExport to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ChronicleBigQueryExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleBigQueryExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.entityGraphSettings">entity_graph_settings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference">ChronicleBigQueryExportEntityGraphSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.iocMatchesSettings">ioc_matches_settings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference">ChronicleBigQueryExportIocMatchesSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.provisioned">provisioned</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.ruleDetectionsSettings">rule_detections_settings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference">ChronicleBigQueryExportRuleDetectionsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference">ChronicleBigQueryExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.udmEventsAggregatesSettings">udm_events_aggregates_settings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference">ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.udmEventsSettings">udm_events_settings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference">ChronicleBigQueryExportUdmEventsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.bigQueryExportPackageInput">big_query_export_package_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.entityGraphSettingsInput">entity_graph_settings_input</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings">ChronicleBigQueryExportEntityGraphSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.iocMatchesSettingsInput">ioc_matches_settings_input</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings">ChronicleBigQueryExportIocMatchesSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.ruleDetectionsSettingsInput">rule_detections_settings_input</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings">ChronicleBigQueryExportRuleDetectionsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts">ChronicleBigQueryExportTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.udmEventsAggregatesSettingsInput">udm_events_aggregates_settings_input</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings">ChronicleBigQueryExportUdmEventsAggregatesSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.udmEventsSettingsInput">udm_events_settings_input</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings">ChronicleBigQueryExportUdmEventsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.bigQueryExportPackage">big_query_export_package</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `entity_graph_settings`<sup>Required</sup> <a name="entity_graph_settings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.entityGraphSettings"></a>

```python
entity_graph_settings: ChronicleBigQueryExportEntityGraphSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference">ChronicleBigQueryExportEntityGraphSettingsOutputReference</a>

---

##### `ioc_matches_settings`<sup>Required</sup> <a name="ioc_matches_settings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.iocMatchesSettings"></a>

```python
ioc_matches_settings: ChronicleBigQueryExportIocMatchesSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference">ChronicleBigQueryExportIocMatchesSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provisioned`<sup>Required</sup> <a name="provisioned" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.provisioned"></a>

```python
provisioned: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `rule_detections_settings`<sup>Required</sup> <a name="rule_detections_settings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.ruleDetectionsSettings"></a>

```python
rule_detections_settings: ChronicleBigQueryExportRuleDetectionsSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference">ChronicleBigQueryExportRuleDetectionsSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.timeouts"></a>

```python
timeouts: ChronicleBigQueryExportTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference">ChronicleBigQueryExportTimeoutsOutputReference</a>

---

##### `udm_events_aggregates_settings`<sup>Required</sup> <a name="udm_events_aggregates_settings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.udmEventsAggregatesSettings"></a>

```python
udm_events_aggregates_settings: ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference">ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference</a>

---

##### `udm_events_settings`<sup>Required</sup> <a name="udm_events_settings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.udmEventsSettings"></a>

```python
udm_events_settings: ChronicleBigQueryExportUdmEventsSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference">ChronicleBigQueryExportUdmEventsSettingsOutputReference</a>

---

##### `big_query_export_package_input`<sup>Optional</sup> <a name="big_query_export_package_input" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.bigQueryExportPackageInput"></a>

```python
big_query_export_package_input: str
```

- *Type:* str

---

##### `entity_graph_settings_input`<sup>Optional</sup> <a name="entity_graph_settings_input" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.entityGraphSettingsInput"></a>

```python
entity_graph_settings_input: ChronicleBigQueryExportEntityGraphSettings
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings">ChronicleBigQueryExportEntityGraphSettings</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `ioc_matches_settings_input`<sup>Optional</sup> <a name="ioc_matches_settings_input" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.iocMatchesSettingsInput"></a>

```python
ioc_matches_settings_input: ChronicleBigQueryExportIocMatchesSettings
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings">ChronicleBigQueryExportIocMatchesSettings</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `rule_detections_settings_input`<sup>Optional</sup> <a name="rule_detections_settings_input" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.ruleDetectionsSettingsInput"></a>

```python
rule_detections_settings_input: ChronicleBigQueryExportRuleDetectionsSettings
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings">ChronicleBigQueryExportRuleDetectionsSettings</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ChronicleBigQueryExportTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts">ChronicleBigQueryExportTimeouts</a>

---

##### `udm_events_aggregates_settings_input`<sup>Optional</sup> <a name="udm_events_aggregates_settings_input" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.udmEventsAggregatesSettingsInput"></a>

```python
udm_events_aggregates_settings_input: ChronicleBigQueryExportUdmEventsAggregatesSettings
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings">ChronicleBigQueryExportUdmEventsAggregatesSettings</a>

---

##### `udm_events_settings_input`<sup>Optional</sup> <a name="udm_events_settings_input" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.udmEventsSettingsInput"></a>

```python
udm_events_settings_input: ChronicleBigQueryExportUdmEventsSettings
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings">ChronicleBigQueryExportUdmEventsSettings</a>

---

##### `big_query_export_package`<sup>Required</sup> <a name="big_query_export_package" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.bigQueryExportPackage"></a>

```python
big_query_export_package: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleBigQueryExportConfig <a name="ChronicleBigQueryExportConfig" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.Initializer"></a>

```python
from cdktn_provider_google import chronicle_big_query_export

chronicleBigQueryExport.ChronicleBigQueryExportConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance: str,
  location: str,
  big_query_export_package: str = None,
  entity_graph_settings: ChronicleBigQueryExportEntityGraphSettings = None,
  id: str = None,
  ioc_matches_settings: ChronicleBigQueryExportIocMatchesSettings = None,
  project: str = None,
  rule_detections_settings: ChronicleBigQueryExportRuleDetectionsSettings = None,
  timeouts: ChronicleBigQueryExportTimeouts = None,
  udm_events_aggregates_settings: ChronicleBigQueryExportUdmEventsAggregatesSettings = None,
  udm_events_settings: ChronicleBigQueryExportUdmEventsSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.instance">instance</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.bigQueryExportPackage">big_query_export_package</a></code> | <code>str</code> | The BigQueryExportPackage entitled for the Chronicle instance. Possible values: ["BIG_QUERY_EXPORT_PACKAGE_BYOBQ", "BIG_QUERY_EXPORT_PACKAGE_ADVANCED"]. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.entityGraphSettings">entity_graph_settings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings">ChronicleBigQueryExportEntityGraphSettings</a></code> | entity_graph_settings block. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#id ChronicleBigQueryExport#id}. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.iocMatchesSettings">ioc_matches_settings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings">ChronicleBigQueryExportIocMatchesSettings</a></code> | ioc_matches_settings block. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#project ChronicleBigQueryExport#project}. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.ruleDetectionsSettings">rule_detections_settings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings">ChronicleBigQueryExportRuleDetectionsSettings</a></code> | rule_detections_settings block. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts">ChronicleBigQueryExportTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.udmEventsAggregatesSettings">udm_events_aggregates_settings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings">ChronicleBigQueryExportUdmEventsAggregatesSettings</a></code> | udm_events_aggregates_settings block. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.udmEventsSettings">udm_events_settings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings">ChronicleBigQueryExportUdmEventsSettings</a></code> | udm_events_settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#instance ChronicleBigQueryExport#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#location ChronicleBigQueryExport#location}

---

##### `big_query_export_package`<sup>Optional</sup> <a name="big_query_export_package" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.bigQueryExportPackage"></a>

```python
big_query_export_package: str
```

- *Type:* str

The BigQueryExportPackage entitled for the Chronicle instance. Possible values: ["BIG_QUERY_EXPORT_PACKAGE_BYOBQ", "BIG_QUERY_EXPORT_PACKAGE_ADVANCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#big_query_export_package ChronicleBigQueryExport#big_query_export_package}

---

##### `entity_graph_settings`<sup>Optional</sup> <a name="entity_graph_settings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.entityGraphSettings"></a>

```python
entity_graph_settings: ChronicleBigQueryExportEntityGraphSettings
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings">ChronicleBigQueryExportEntityGraphSettings</a>

entity_graph_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#entity_graph_settings ChronicleBigQueryExport#entity_graph_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#id ChronicleBigQueryExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ioc_matches_settings`<sup>Optional</sup> <a name="ioc_matches_settings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.iocMatchesSettings"></a>

```python
ioc_matches_settings: ChronicleBigQueryExportIocMatchesSettings
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings">ChronicleBigQueryExportIocMatchesSettings</a>

ioc_matches_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#ioc_matches_settings ChronicleBigQueryExport#ioc_matches_settings}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#project ChronicleBigQueryExport#project}.

---

##### `rule_detections_settings`<sup>Optional</sup> <a name="rule_detections_settings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.ruleDetectionsSettings"></a>

```python
rule_detections_settings: ChronicleBigQueryExportRuleDetectionsSettings
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings">ChronicleBigQueryExportRuleDetectionsSettings</a>

rule_detections_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#rule_detections_settings ChronicleBigQueryExport#rule_detections_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.timeouts"></a>

```python
timeouts: ChronicleBigQueryExportTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts">ChronicleBigQueryExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#timeouts ChronicleBigQueryExport#timeouts}

---

##### `udm_events_aggregates_settings`<sup>Optional</sup> <a name="udm_events_aggregates_settings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.udmEventsAggregatesSettings"></a>

```python
udm_events_aggregates_settings: ChronicleBigQueryExportUdmEventsAggregatesSettings
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings">ChronicleBigQueryExportUdmEventsAggregatesSettings</a>

udm_events_aggregates_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#udm_events_aggregates_settings ChronicleBigQueryExport#udm_events_aggregates_settings}

---

##### `udm_events_settings`<sup>Optional</sup> <a name="udm_events_settings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.udmEventsSettings"></a>

```python
udm_events_settings: ChronicleBigQueryExportUdmEventsSettings
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings">ChronicleBigQueryExportUdmEventsSettings</a>

udm_events_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#udm_events_settings ChronicleBigQueryExport#udm_events_settings}

---

### ChronicleBigQueryExportEntityGraphSettings <a name="ChronicleBigQueryExportEntityGraphSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings.Initializer"></a>

```python
from cdktn_provider_google import chronicle_big_query_export

chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings(
  enabled: bool | IResolvable,
  retention_days: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | The retention period for the data source in days. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#enabled ChronicleBigQueryExport#enabled}

---

##### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#retention_days ChronicleBigQueryExport#retention_days}

---

### ChronicleBigQueryExportIocMatchesSettings <a name="ChronicleBigQueryExportIocMatchesSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings.Initializer"></a>

```python
from cdktn_provider_google import chronicle_big_query_export

chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings(
  enabled: bool | IResolvable,
  retention_days: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | The retention period for the data source in days. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#enabled ChronicleBigQueryExport#enabled}

---

##### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#retention_days ChronicleBigQueryExport#retention_days}

---

### ChronicleBigQueryExportRuleDetectionsSettings <a name="ChronicleBigQueryExportRuleDetectionsSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings.Initializer"></a>

```python
from cdktn_provider_google import chronicle_big_query_export

chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings(
  enabled: bool | IResolvable,
  retention_days: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | The retention period for the data source in days. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#enabled ChronicleBigQueryExport#enabled}

---

##### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#retention_days ChronicleBigQueryExport#retention_days}

---

### ChronicleBigQueryExportTimeouts <a name="ChronicleBigQueryExportTimeouts" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts.Initializer"></a>

```python
from cdktn_provider_google import chronicle_big_query_export

chronicleBigQueryExport.ChronicleBigQueryExportTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#create ChronicleBigQueryExport#create}. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#delete ChronicleBigQueryExport#delete}. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#update ChronicleBigQueryExport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#create ChronicleBigQueryExport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#delete ChronicleBigQueryExport#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#update ChronicleBigQueryExport#update}.

---

### ChronicleBigQueryExportUdmEventsAggregatesSettings <a name="ChronicleBigQueryExportUdmEventsAggregatesSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings.Initializer"></a>

```python
from cdktn_provider_google import chronicle_big_query_export

chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings(
  enabled: bool | IResolvable,
  retention_days: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | The retention period for the data source in days. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#enabled ChronicleBigQueryExport#enabled}

---

##### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#retention_days ChronicleBigQueryExport#retention_days}

---

### ChronicleBigQueryExportUdmEventsSettings <a name="ChronicleBigQueryExportUdmEventsSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings.Initializer"></a>

```python
from cdktn_provider_google import chronicle_big_query_export

chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings(
  enabled: bool | IResolvable,
  retention_days: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | The retention period for the data source in days. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#enabled ChronicleBigQueryExport#enabled}

---

##### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_big_query_export#retention_days ChronicleBigQueryExport#retention_days}

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleBigQueryExportEntityGraphSettingsOutputReference <a name="ChronicleBigQueryExportEntityGraphSettingsOutputReference" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import chronicle_big_query_export

chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.dataFreshnessTime">data_freshness_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.dataVolume">data_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.latestExportJobState">latest_export_job_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.retentionDaysInput">retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings">ChronicleBigQueryExportEntityGraphSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_freshness_time`<sup>Required</sup> <a name="data_freshness_time" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.dataFreshnessTime"></a>

```python
data_freshness_time: str
```

- *Type:* str

---

##### `data_volume`<sup>Required</sup> <a name="data_volume" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.dataVolume"></a>

```python
data_volume: str
```

- *Type:* str

---

##### `latest_export_job_state`<sup>Required</sup> <a name="latest_export_job_state" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.latestExportJobState"></a>

```python
latest_export_job_state: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retention_days_input`<sup>Optional</sup> <a name="retention_days_input" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.retentionDaysInput"></a>

```python
retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.internalValue"></a>

```python
internal_value: ChronicleBigQueryExportEntityGraphSettings
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings">ChronicleBigQueryExportEntityGraphSettings</a>

---


### ChronicleBigQueryExportIocMatchesSettingsOutputReference <a name="ChronicleBigQueryExportIocMatchesSettingsOutputReference" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import chronicle_big_query_export

chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.dataFreshnessTime">data_freshness_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.dataVolume">data_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.latestExportJobState">latest_export_job_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.retentionDaysInput">retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings">ChronicleBigQueryExportIocMatchesSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_freshness_time`<sup>Required</sup> <a name="data_freshness_time" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.dataFreshnessTime"></a>

```python
data_freshness_time: str
```

- *Type:* str

---

##### `data_volume`<sup>Required</sup> <a name="data_volume" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.dataVolume"></a>

```python
data_volume: str
```

- *Type:* str

---

##### `latest_export_job_state`<sup>Required</sup> <a name="latest_export_job_state" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.latestExportJobState"></a>

```python
latest_export_job_state: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retention_days_input`<sup>Optional</sup> <a name="retention_days_input" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.retentionDaysInput"></a>

```python
retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.internalValue"></a>

```python
internal_value: ChronicleBigQueryExportIocMatchesSettings
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings">ChronicleBigQueryExportIocMatchesSettings</a>

---


### ChronicleBigQueryExportRuleDetectionsSettingsOutputReference <a name="ChronicleBigQueryExportRuleDetectionsSettingsOutputReference" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import chronicle_big_query_export

chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.dataFreshnessTime">data_freshness_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.dataVolume">data_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.latestExportJobState">latest_export_job_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.retentionDaysInput">retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings">ChronicleBigQueryExportRuleDetectionsSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_freshness_time`<sup>Required</sup> <a name="data_freshness_time" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.dataFreshnessTime"></a>

```python
data_freshness_time: str
```

- *Type:* str

---

##### `data_volume`<sup>Required</sup> <a name="data_volume" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.dataVolume"></a>

```python
data_volume: str
```

- *Type:* str

---

##### `latest_export_job_state`<sup>Required</sup> <a name="latest_export_job_state" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.latestExportJobState"></a>

```python
latest_export_job_state: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retention_days_input`<sup>Optional</sup> <a name="retention_days_input" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.retentionDaysInput"></a>

```python
retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.internalValue"></a>

```python
internal_value: ChronicleBigQueryExportRuleDetectionsSettings
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings">ChronicleBigQueryExportRuleDetectionsSettings</a>

---


### ChronicleBigQueryExportTimeoutsOutputReference <a name="ChronicleBigQueryExportTimeoutsOutputReference" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import chronicle_big_query_export

chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts">ChronicleBigQueryExportTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChronicleBigQueryExportTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts">ChronicleBigQueryExportTimeouts</a>

---


### ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference <a name="ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import chronicle_big_query_export

chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.dataFreshnessTime">data_freshness_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.dataVolume">data_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.latestExportJobState">latest_export_job_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.retentionDaysInput">retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings">ChronicleBigQueryExportUdmEventsAggregatesSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_freshness_time`<sup>Required</sup> <a name="data_freshness_time" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.dataFreshnessTime"></a>

```python
data_freshness_time: str
```

- *Type:* str

---

##### `data_volume`<sup>Required</sup> <a name="data_volume" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.dataVolume"></a>

```python
data_volume: str
```

- *Type:* str

---

##### `latest_export_job_state`<sup>Required</sup> <a name="latest_export_job_state" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.latestExportJobState"></a>

```python
latest_export_job_state: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retention_days_input`<sup>Optional</sup> <a name="retention_days_input" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.retentionDaysInput"></a>

```python
retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.internalValue"></a>

```python
internal_value: ChronicleBigQueryExportUdmEventsAggregatesSettings
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings">ChronicleBigQueryExportUdmEventsAggregatesSettings</a>

---


### ChronicleBigQueryExportUdmEventsSettingsOutputReference <a name="ChronicleBigQueryExportUdmEventsSettingsOutputReference" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import chronicle_big_query_export

chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.dataFreshnessTime">data_freshness_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.dataVolume">data_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.latestExportJobState">latest_export_job_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.retentionDaysInput">retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings">ChronicleBigQueryExportUdmEventsSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_freshness_time`<sup>Required</sup> <a name="data_freshness_time" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.dataFreshnessTime"></a>

```python
data_freshness_time: str
```

- *Type:* str

---

##### `data_volume`<sup>Required</sup> <a name="data_volume" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.dataVolume"></a>

```python
data_volume: str
```

- *Type:* str

---

##### `latest_export_job_state`<sup>Required</sup> <a name="latest_export_job_state" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.latestExportJobState"></a>

```python
latest_export_job_state: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retention_days_input`<sup>Optional</sup> <a name="retention_days_input" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.retentionDaysInput"></a>

```python
retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.internalValue"></a>

```python
internal_value: ChronicleBigQueryExportUdmEventsSettings
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings">ChronicleBigQueryExportUdmEventsSettings</a>

---



