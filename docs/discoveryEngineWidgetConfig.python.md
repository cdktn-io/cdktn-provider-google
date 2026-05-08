# `discoveryEngineWidgetConfig` Submodule <a name="`discoveryEngineWidgetConfig` Submodule" id="@cdktn/provider-google.discoveryEngineWidgetConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineWidgetConfig <a name="DiscoveryEngineWidgetConfig" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config google_discovery_engine_widget_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_widget_config

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  engine_id: str,
  location: str,
  access_settings: DiscoveryEngineWidgetConfigAccessSettings = None,
  collection_id: str = None,
  homepage_setting: DiscoveryEngineWidgetConfigHomepageSetting = None,
  id: str = None,
  project: str = None,
  timeouts: DiscoveryEngineWidgetConfigTimeouts = None,
  ui_branding: DiscoveryEngineWidgetConfigUiBranding = None,
  ui_settings: DiscoveryEngineWidgetConfigUiSettings = None,
  widget_config_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.engineId">engine_id</a></code> | <code>str</code> | The engine ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.location">location</a></code> | <code>str</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.accessSettings">access_settings</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings">DiscoveryEngineWidgetConfigAccessSettings</a></code> | access_settings block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.collectionId">collection_id</a></code> | <code>str</code> | The collection ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.homepageSetting">homepage_setting</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting">DiscoveryEngineWidgetConfigHomepageSetting</a></code> | homepage_setting block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#id DiscoveryEngineWidgetConfig#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#project DiscoveryEngineWidgetConfig#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts">DiscoveryEngineWidgetConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.uiBranding">ui_branding</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding">DiscoveryEngineWidgetConfigUiBranding</a></code> | ui_branding block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.uiSettings">ui_settings</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings">DiscoveryEngineWidgetConfigUiSettings</a></code> | ui_settings block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.widgetConfigId">widget_config_id</a></code> | <code>str</code> | The unique ID to use for the WidgetConfig. Currently only accepts "default_search_widget_config". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.engineId"></a>

- *Type:* str

The engine ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#engine_id DiscoveryEngineWidgetConfig#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.location"></a>

- *Type:* str

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#location DiscoveryEngineWidgetConfig#location}

---

##### `access_settings`<sup>Optional</sup> <a name="access_settings" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.accessSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings">DiscoveryEngineWidgetConfigAccessSettings</a>

access_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#access_settings DiscoveryEngineWidgetConfig#access_settings}

---

##### `collection_id`<sup>Optional</sup> <a name="collection_id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.collectionId"></a>

- *Type:* str

The collection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#collection_id DiscoveryEngineWidgetConfig#collection_id}

---

##### `homepage_setting`<sup>Optional</sup> <a name="homepage_setting" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.homepageSetting"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting">DiscoveryEngineWidgetConfigHomepageSetting</a>

homepage_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#homepage_setting DiscoveryEngineWidgetConfig#homepage_setting}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#id DiscoveryEngineWidgetConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#project DiscoveryEngineWidgetConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts">DiscoveryEngineWidgetConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#timeouts DiscoveryEngineWidgetConfig#timeouts}

---

##### `ui_branding`<sup>Optional</sup> <a name="ui_branding" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.uiBranding"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding">DiscoveryEngineWidgetConfigUiBranding</a>

ui_branding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#ui_branding DiscoveryEngineWidgetConfig#ui_branding}

---

##### `ui_settings`<sup>Optional</sup> <a name="ui_settings" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.uiSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings">DiscoveryEngineWidgetConfigUiSettings</a>

ui_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#ui_settings DiscoveryEngineWidgetConfig#ui_settings}

---

##### `widget_config_id`<sup>Optional</sup> <a name="widget_config_id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.widgetConfigId"></a>

- *Type:* str

The unique ID to use for the WidgetConfig. Currently only accepts "default_search_widget_config".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#widget_config_id DiscoveryEngineWidgetConfig#widget_config_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putAccessSettings">put_access_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putHomepageSetting">put_homepage_setting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putUiBranding">put_ui_branding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putUiSettings">put_ui_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetAccessSettings">reset_access_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetCollectionId">reset_collection_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetHomepageSetting">reset_homepage_setting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetUiBranding">reset_ui_branding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetUiSettings">reset_ui_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetWidgetConfigId">reset_widget_config_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_access_settings` <a name="put_access_settings" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putAccessSettings"></a>

```python
def put_access_settings(
  allowlisted_domains: typing.List[str] = None,
  allow_public_access: bool | IResolvable = None,
  enable_web_app: bool | IResolvable = None,
  language_code: str = None,
  workforce_identity_pool_provider: str = None
) -> None
```

###### `allowlisted_domains`<sup>Optional</sup> <a name="allowlisted_domains" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putAccessSettings.parameter.allowlistedDomains"></a>

- *Type:* typing.List[str]

List of domains that are allowed to integrate the search widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#allowlisted_domains DiscoveryEngineWidgetConfig#allowlisted_domains}

---

###### `allow_public_access`<sup>Optional</sup> <a name="allow_public_access" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putAccessSettings.parameter.allowPublicAccess"></a>

- *Type:* bool | cdktn.IResolvable

Whether public unauthenticated access is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#allow_public_access DiscoveryEngineWidgetConfig#allow_public_access}

---

###### `enable_web_app`<sup>Optional</sup> <a name="enable_web_app" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putAccessSettings.parameter.enableWebApp"></a>

- *Type:* bool | cdktn.IResolvable

Whether web app access is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#enable_web_app DiscoveryEngineWidgetConfig#enable_web_app}

---

###### `language_code`<sup>Optional</sup> <a name="language_code" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putAccessSettings.parameter.languageCode"></a>

- *Type:* str

Language code for user interface. Use language tags defined by [BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). If unset, the default language code is "en-US".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#language_code DiscoveryEngineWidgetConfig#language_code}

---

###### `workforce_identity_pool_provider`<sup>Optional</sup> <a name="workforce_identity_pool_provider" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putAccessSettings.parameter.workforceIdentityPoolProvider"></a>

- *Type:* str

The workforce identity pool provider used to access the widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#workforce_identity_pool_provider DiscoveryEngineWidgetConfig#workforce_identity_pool_provider}

---

##### `put_homepage_setting` <a name="put_homepage_setting" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putHomepageSetting"></a>

```python
def put_homepage_setting(
  shortcuts: IResolvable | typing.List[DiscoveryEngineWidgetConfigHomepageSettingShortcuts] = None
) -> None
```

###### `shortcuts`<sup>Optional</sup> <a name="shortcuts" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putHomepageSetting.parameter.shortcuts"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts">DiscoveryEngineWidgetConfigHomepageSettingShortcuts</a>]

shortcuts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#shortcuts DiscoveryEngineWidgetConfig#shortcuts}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#create DiscoveryEngineWidgetConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#delete DiscoveryEngineWidgetConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#update DiscoveryEngineWidgetConfig#update}.

---

##### `put_ui_branding` <a name="put_ui_branding" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putUiBranding"></a>

```python
def put_ui_branding(
  logo: DiscoveryEngineWidgetConfigUiBrandingLogo = None
) -> None
```

###### `logo`<sup>Optional</sup> <a name="logo" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putUiBranding.parameter.logo"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo">DiscoveryEngineWidgetConfigUiBrandingLogo</a>

logo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#logo DiscoveryEngineWidgetConfig#logo}

---

##### `put_ui_settings` <a name="put_ui_settings" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putUiSettings"></a>

```python
def put_ui_settings(
  data_store_ui_configs: IResolvable | typing.List[DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs] = None,
  default_search_request_order_by: str = None,
  disable_user_events_collection: bool | IResolvable = None,
  enable_autocomplete: bool | IResolvable = None,
  enable_create_agent_button: bool | IResolvable = None,
  enable_people_search: bool | IResolvable = None,
  enable_quality_feedback: bool | IResolvable = None,
  enable_safe_search: bool | IResolvable = None,
  enable_search_as_you_type: bool | IResolvable = None,
  enable_visual_content_summary: bool | IResolvable = None,
  generative_answer_config: DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig = None,
  interaction_type: str = None,
  result_description_type: str = None
) -> None
```

###### `data_store_ui_configs`<sup>Optional</sup> <a name="data_store_ui_configs" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putUiSettings.parameter.dataStoreUiConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a>]

data_store_ui_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#data_store_ui_configs DiscoveryEngineWidgetConfig#data_store_ui_configs}

---

###### `default_search_request_order_by`<sup>Optional</sup> <a name="default_search_request_order_by" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putUiSettings.parameter.defaultSearchRequestOrderBy"></a>

- *Type:* str

The default ordering for search results if specified. Used to set SearchRequest#orderBy on applicable requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#default_search_request_order_by DiscoveryEngineWidgetConfig#default_search_request_order_by}

---

###### `disable_user_events_collection`<sup>Optional</sup> <a name="disable_user_events_collection" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putUiSettings.parameter.disableUserEventsCollection"></a>

- *Type:* bool | cdktn.IResolvable

If set to true, the widget will not collect user events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#disable_user_events_collection DiscoveryEngineWidgetConfig#disable_user_events_collection}

---

###### `enable_autocomplete`<sup>Optional</sup> <a name="enable_autocomplete" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putUiSettings.parameter.enableAutocomplete"></a>

- *Type:* bool | cdktn.IResolvable

Whether or not to enable autocomplete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#enable_autocomplete DiscoveryEngineWidgetConfig#enable_autocomplete}

---

###### `enable_create_agent_button`<sup>Optional</sup> <a name="enable_create_agent_button" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putUiSettings.parameter.enableCreateAgentButton"></a>

- *Type:* bool | cdktn.IResolvable

If set to true, the widget will enable the create agent button.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#enable_create_agent_button DiscoveryEngineWidgetConfig#enable_create_agent_button}

---

###### `enable_people_search`<sup>Optional</sup> <a name="enable_people_search" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putUiSettings.parameter.enablePeopleSearch"></a>

- *Type:* bool | cdktn.IResolvable

If set to true, the widget will enable people search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#enable_people_search DiscoveryEngineWidgetConfig#enable_people_search}

---

###### `enable_quality_feedback`<sup>Optional</sup> <a name="enable_quality_feedback" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putUiSettings.parameter.enableQualityFeedback"></a>

- *Type:* bool | cdktn.IResolvable

Turn on or off collecting the search result quality feedback from end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#enable_quality_feedback DiscoveryEngineWidgetConfig#enable_quality_feedback}

---

###### `enable_safe_search`<sup>Optional</sup> <a name="enable_safe_search" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putUiSettings.parameter.enableSafeSearch"></a>

- *Type:* bool | cdktn.IResolvable

Whether to enable safe search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#enable_safe_search DiscoveryEngineWidgetConfig#enable_safe_search}

---

###### `enable_search_as_you_type`<sup>Optional</sup> <a name="enable_search_as_you_type" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putUiSettings.parameter.enableSearchAsYouType"></a>

- *Type:* bool | cdktn.IResolvable

Whether to enable search-as-you-type behavior for the search widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#enable_search_as_you_type DiscoveryEngineWidgetConfig#enable_search_as_you_type}

---

###### `enable_visual_content_summary`<sup>Optional</sup> <a name="enable_visual_content_summary" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putUiSettings.parameter.enableVisualContentSummary"></a>

- *Type:* bool | cdktn.IResolvable

If set to true, the widget will enable visual content summary on applicable search requests. Only used by healthcare search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#enable_visual_content_summary DiscoveryEngineWidgetConfig#enable_visual_content_summary}

---

###### `generative_answer_config`<sup>Optional</sup> <a name="generative_answer_config" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putUiSettings.parameter.generativeAnswerConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a>

generative_answer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#generative_answer_config DiscoveryEngineWidgetConfig#generative_answer_config}

---

###### `interaction_type`<sup>Optional</sup> <a name="interaction_type" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putUiSettings.parameter.interactionType"></a>

- *Type:* str

Describes widget (or web app) interaction type Possible values: ["SEARCH_ONLY", "SEARCH_WITH_ANSWER", "SEARCH_WITH_FOLLOW_UPS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#interaction_type DiscoveryEngineWidgetConfig#interaction_type}

---

###### `result_description_type`<sup>Optional</sup> <a name="result_description_type" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putUiSettings.parameter.resultDescriptionType"></a>

- *Type:* str

Controls whether result extract is display and how (snippet or extractive answer).

Default to no result if unspecified. Possible values: ["SNIPPET", "EXTRACTIVE_ANSWER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#result_description_type DiscoveryEngineWidgetConfig#result_description_type}

---

##### `reset_access_settings` <a name="reset_access_settings" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetAccessSettings"></a>

```python
def reset_access_settings() -> None
```

##### `reset_collection_id` <a name="reset_collection_id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetCollectionId"></a>

```python
def reset_collection_id() -> None
```

##### `reset_homepage_setting` <a name="reset_homepage_setting" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetHomepageSetting"></a>

```python
def reset_homepage_setting() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_ui_branding` <a name="reset_ui_branding" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetUiBranding"></a>

```python
def reset_ui_branding() -> None
```

##### `reset_ui_settings` <a name="reset_ui_settings" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetUiSettings"></a>

```python
def reset_ui_settings() -> None
```

##### `reset_widget_config_id` <a name="reset_widget_config_id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetWidgetConfigId"></a>

```python
def reset_widget_config_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DiscoveryEngineWidgetConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.isConstruct"></a>

```python
from cdktn_provider_google import discovery_engine_widget_config

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.isTerraformElement"></a>

```python
from cdktn_provider_google import discovery_engine_widget_config

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.isTerraformResource"></a>

```python
from cdktn_provider_google import discovery_engine_widget_config

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.generateConfigForImport"></a>

```python
from cdktn_provider_google import discovery_engine_widget_config

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DiscoveryEngineWidgetConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DiscoveryEngineWidgetConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DiscoveryEngineWidgetConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineWidgetConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.accessSettings">access_settings</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference">DiscoveryEngineWidgetConfigAccessSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.homepageSetting">homepage_setting</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference">DiscoveryEngineWidgetConfigHomepageSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference">DiscoveryEngineWidgetConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.uiBranding">ui_branding</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference">DiscoveryEngineWidgetConfigUiBrandingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.uiSettings">ui_settings</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference">DiscoveryEngineWidgetConfigUiSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.accessSettingsInput">access_settings_input</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings">DiscoveryEngineWidgetConfigAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.collectionIdInput">collection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.engineIdInput">engine_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.homepageSettingInput">homepage_setting_input</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting">DiscoveryEngineWidgetConfigHomepageSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts">DiscoveryEngineWidgetConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.uiBrandingInput">ui_branding_input</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding">DiscoveryEngineWidgetConfigUiBranding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.uiSettingsInput">ui_settings_input</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings">DiscoveryEngineWidgetConfigUiSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.widgetConfigIdInput">widget_config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.collectionId">collection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.engineId">engine_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.widgetConfigId">widget_config_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_settings`<sup>Required</sup> <a name="access_settings" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.accessSettings"></a>

```python
access_settings: DiscoveryEngineWidgetConfigAccessSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference">DiscoveryEngineWidgetConfigAccessSettingsOutputReference</a>

---

##### `homepage_setting`<sup>Required</sup> <a name="homepage_setting" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.homepageSetting"></a>

```python
homepage_setting: DiscoveryEngineWidgetConfigHomepageSettingOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference">DiscoveryEngineWidgetConfigHomepageSettingOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.timeouts"></a>

```python
timeouts: DiscoveryEngineWidgetConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference">DiscoveryEngineWidgetConfigTimeoutsOutputReference</a>

---

##### `ui_branding`<sup>Required</sup> <a name="ui_branding" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.uiBranding"></a>

```python
ui_branding: DiscoveryEngineWidgetConfigUiBrandingOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference">DiscoveryEngineWidgetConfigUiBrandingOutputReference</a>

---

##### `ui_settings`<sup>Required</sup> <a name="ui_settings" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.uiSettings"></a>

```python
ui_settings: DiscoveryEngineWidgetConfigUiSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference">DiscoveryEngineWidgetConfigUiSettingsOutputReference</a>

---

##### `access_settings_input`<sup>Optional</sup> <a name="access_settings_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.accessSettingsInput"></a>

```python
access_settings_input: DiscoveryEngineWidgetConfigAccessSettings
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings">DiscoveryEngineWidgetConfigAccessSettings</a>

---

##### `collection_id_input`<sup>Optional</sup> <a name="collection_id_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.collectionIdInput"></a>

```python
collection_id_input: str
```

- *Type:* str

---

##### `engine_id_input`<sup>Optional</sup> <a name="engine_id_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.engineIdInput"></a>

```python
engine_id_input: str
```

- *Type:* str

---

##### `homepage_setting_input`<sup>Optional</sup> <a name="homepage_setting_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.homepageSettingInput"></a>

```python
homepage_setting_input: DiscoveryEngineWidgetConfigHomepageSetting
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting">DiscoveryEngineWidgetConfigHomepageSetting</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DiscoveryEngineWidgetConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts">DiscoveryEngineWidgetConfigTimeouts</a>

---

##### `ui_branding_input`<sup>Optional</sup> <a name="ui_branding_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.uiBrandingInput"></a>

```python
ui_branding_input: DiscoveryEngineWidgetConfigUiBranding
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding">DiscoveryEngineWidgetConfigUiBranding</a>

---

##### `ui_settings_input`<sup>Optional</sup> <a name="ui_settings_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.uiSettingsInput"></a>

```python
ui_settings_input: DiscoveryEngineWidgetConfigUiSettings
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings">DiscoveryEngineWidgetConfigUiSettings</a>

---

##### `widget_config_id_input`<sup>Optional</sup> <a name="widget_config_id_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.widgetConfigIdInput"></a>

```python
widget_config_id_input: str
```

- *Type:* str

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.engineId"></a>

```python
engine_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `widget_config_id`<sup>Required</sup> <a name="widget_config_id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.widgetConfigId"></a>

```python
widget_config_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineWidgetConfigAccessSettings <a name="DiscoveryEngineWidgetConfigAccessSettings" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_widget_config

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings(
  allowlisted_domains: typing.List[str] = None,
  allow_public_access: bool | IResolvable = None,
  enable_web_app: bool | IResolvable = None,
  language_code: str = None,
  workforce_identity_pool_provider: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings.property.allowlistedDomains">allowlisted_domains</a></code> | <code>typing.List[str]</code> | List of domains that are allowed to integrate the search widget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings.property.allowPublicAccess">allow_public_access</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether public unauthenticated access is allowed. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings.property.enableWebApp">enable_web_app</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether web app access is enabled. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings.property.languageCode">language_code</a></code> | <code>str</code> | Language code for user interface. Use language tags defined by [BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). If unset, the default language code is "en-US". |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings.property.workforceIdentityPoolProvider">workforce_identity_pool_provider</a></code> | <code>str</code> | The workforce identity pool provider used to access the widget. |

---

##### `allowlisted_domains`<sup>Optional</sup> <a name="allowlisted_domains" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings.property.allowlistedDomains"></a>

```python
allowlisted_domains: typing.List[str]
```

- *Type:* typing.List[str]

List of domains that are allowed to integrate the search widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#allowlisted_domains DiscoveryEngineWidgetConfig#allowlisted_domains}

---

##### `allow_public_access`<sup>Optional</sup> <a name="allow_public_access" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings.property.allowPublicAccess"></a>

```python
allow_public_access: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether public unauthenticated access is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#allow_public_access DiscoveryEngineWidgetConfig#allow_public_access}

---

##### `enable_web_app`<sup>Optional</sup> <a name="enable_web_app" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings.property.enableWebApp"></a>

```python
enable_web_app: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether web app access is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#enable_web_app DiscoveryEngineWidgetConfig#enable_web_app}

---

##### `language_code`<sup>Optional</sup> <a name="language_code" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

Language code for user interface. Use language tags defined by [BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). If unset, the default language code is "en-US".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#language_code DiscoveryEngineWidgetConfig#language_code}

---

##### `workforce_identity_pool_provider`<sup>Optional</sup> <a name="workforce_identity_pool_provider" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings.property.workforceIdentityPoolProvider"></a>

```python
workforce_identity_pool_provider: str
```

- *Type:* str

The workforce identity pool provider used to access the widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#workforce_identity_pool_provider DiscoveryEngineWidgetConfig#workforce_identity_pool_provider}

---

### DiscoveryEngineWidgetConfigConfig <a name="DiscoveryEngineWidgetConfigConfig" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_widget_config

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  engine_id: str,
  location: str,
  access_settings: DiscoveryEngineWidgetConfigAccessSettings = None,
  collection_id: str = None,
  homepage_setting: DiscoveryEngineWidgetConfigHomepageSetting = None,
  id: str = None,
  project: str = None,
  timeouts: DiscoveryEngineWidgetConfigTimeouts = None,
  ui_branding: DiscoveryEngineWidgetConfigUiBranding = None,
  ui_settings: DiscoveryEngineWidgetConfigUiSettings = None,
  widget_config_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.engineId">engine_id</a></code> | <code>str</code> | The engine ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.location">location</a></code> | <code>str</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.accessSettings">access_settings</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings">DiscoveryEngineWidgetConfigAccessSettings</a></code> | access_settings block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.collectionId">collection_id</a></code> | <code>str</code> | The collection ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.homepageSetting">homepage_setting</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting">DiscoveryEngineWidgetConfigHomepageSetting</a></code> | homepage_setting block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#id DiscoveryEngineWidgetConfig#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#project DiscoveryEngineWidgetConfig#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts">DiscoveryEngineWidgetConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.uiBranding">ui_branding</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding">DiscoveryEngineWidgetConfigUiBranding</a></code> | ui_branding block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.uiSettings">ui_settings</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings">DiscoveryEngineWidgetConfigUiSettings</a></code> | ui_settings block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.widgetConfigId">widget_config_id</a></code> | <code>str</code> | The unique ID to use for the WidgetConfig. Currently only accepts "default_search_widget_config". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.engineId"></a>

```python
engine_id: str
```

- *Type:* str

The engine ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#engine_id DiscoveryEngineWidgetConfig#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#location DiscoveryEngineWidgetConfig#location}

---

##### `access_settings`<sup>Optional</sup> <a name="access_settings" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.accessSettings"></a>

```python
access_settings: DiscoveryEngineWidgetConfigAccessSettings
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings">DiscoveryEngineWidgetConfigAccessSettings</a>

access_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#access_settings DiscoveryEngineWidgetConfig#access_settings}

---

##### `collection_id`<sup>Optional</sup> <a name="collection_id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

The collection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#collection_id DiscoveryEngineWidgetConfig#collection_id}

---

##### `homepage_setting`<sup>Optional</sup> <a name="homepage_setting" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.homepageSetting"></a>

```python
homepage_setting: DiscoveryEngineWidgetConfigHomepageSetting
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting">DiscoveryEngineWidgetConfigHomepageSetting</a>

homepage_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#homepage_setting DiscoveryEngineWidgetConfig#homepage_setting}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#id DiscoveryEngineWidgetConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#project DiscoveryEngineWidgetConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.timeouts"></a>

```python
timeouts: DiscoveryEngineWidgetConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts">DiscoveryEngineWidgetConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#timeouts DiscoveryEngineWidgetConfig#timeouts}

---

##### `ui_branding`<sup>Optional</sup> <a name="ui_branding" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.uiBranding"></a>

```python
ui_branding: DiscoveryEngineWidgetConfigUiBranding
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding">DiscoveryEngineWidgetConfigUiBranding</a>

ui_branding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#ui_branding DiscoveryEngineWidgetConfig#ui_branding}

---

##### `ui_settings`<sup>Optional</sup> <a name="ui_settings" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.uiSettings"></a>

```python
ui_settings: DiscoveryEngineWidgetConfigUiSettings
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings">DiscoveryEngineWidgetConfigUiSettings</a>

ui_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#ui_settings DiscoveryEngineWidgetConfig#ui_settings}

---

##### `widget_config_id`<sup>Optional</sup> <a name="widget_config_id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.widgetConfigId"></a>

```python
widget_config_id: str
```

- *Type:* str

The unique ID to use for the WidgetConfig. Currently only accepts "default_search_widget_config".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#widget_config_id DiscoveryEngineWidgetConfig#widget_config_id}

---

### DiscoveryEngineWidgetConfigHomepageSetting <a name="DiscoveryEngineWidgetConfigHomepageSetting" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_widget_config

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting(
  shortcuts: IResolvable | typing.List[DiscoveryEngineWidgetConfigHomepageSettingShortcuts] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting.property.shortcuts">shortcuts</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts">DiscoveryEngineWidgetConfigHomepageSettingShortcuts</a>]</code> | shortcuts block. |

---

##### `shortcuts`<sup>Optional</sup> <a name="shortcuts" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting.property.shortcuts"></a>

```python
shortcuts: IResolvable | typing.List[DiscoveryEngineWidgetConfigHomepageSettingShortcuts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts">DiscoveryEngineWidgetConfigHomepageSettingShortcuts</a>]

shortcuts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#shortcuts DiscoveryEngineWidgetConfig#shortcuts}

---

### DiscoveryEngineWidgetConfigHomepageSettingShortcuts <a name="DiscoveryEngineWidgetConfigHomepageSettingShortcuts" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_widget_config

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts(
  destination_uri: str = None,
  icon: DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts.property.destinationUri">destination_uri</a></code> | <code>str</code> | Destination URL of shortcut. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts.property.icon">icon</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon">DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon</a></code> | icon block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts.property.title">title</a></code> | <code>str</code> | Title of the shortcut. |

---

##### `destination_uri`<sup>Optional</sup> <a name="destination_uri" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts.property.destinationUri"></a>

```python
destination_uri: str
```

- *Type:* str

Destination URL of shortcut.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#destination_uri DiscoveryEngineWidgetConfig#destination_uri}

---

##### `icon`<sup>Optional</sup> <a name="icon" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts.property.icon"></a>

```python
icon: DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon">DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon</a>

icon block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#icon DiscoveryEngineWidgetConfig#icon}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts.property.title"></a>

```python
title: str
```

- *Type:* str

Title of the shortcut.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#title DiscoveryEngineWidgetConfig#title}

---

### DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon <a name="DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_widget_config

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon(
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon.property.url">url</a></code> | <code>str</code> | Image URL. |

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon.property.url"></a>

```python
url: str
```

- *Type:* str

Image URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#url DiscoveryEngineWidgetConfig#url}

---

### DiscoveryEngineWidgetConfigTimeouts <a name="DiscoveryEngineWidgetConfigTimeouts" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_widget_config

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#create DiscoveryEngineWidgetConfig#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#delete DiscoveryEngineWidgetConfig#delete}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#update DiscoveryEngineWidgetConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#create DiscoveryEngineWidgetConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#delete DiscoveryEngineWidgetConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#update DiscoveryEngineWidgetConfig#update}.

---

### DiscoveryEngineWidgetConfigUiBranding <a name="DiscoveryEngineWidgetConfigUiBranding" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_widget_config

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding(
  logo: DiscoveryEngineWidgetConfigUiBrandingLogo = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding.property.logo">logo</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo">DiscoveryEngineWidgetConfigUiBrandingLogo</a></code> | logo block. |

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding.property.logo"></a>

```python
logo: DiscoveryEngineWidgetConfigUiBrandingLogo
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo">DiscoveryEngineWidgetConfigUiBrandingLogo</a>

logo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#logo DiscoveryEngineWidgetConfig#logo}

---

### DiscoveryEngineWidgetConfigUiBrandingLogo <a name="DiscoveryEngineWidgetConfigUiBrandingLogo" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_widget_config

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo(
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo.property.url">url</a></code> | <code>str</code> | Image URL. |

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo.property.url"></a>

```python
url: str
```

- *Type:* str

Image URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#url DiscoveryEngineWidgetConfig#url}

---

### DiscoveryEngineWidgetConfigUiSettings <a name="DiscoveryEngineWidgetConfigUiSettings" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_widget_config

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings(
  data_store_ui_configs: IResolvable | typing.List[DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs] = None,
  default_search_request_order_by: str = None,
  disable_user_events_collection: bool | IResolvable = None,
  enable_autocomplete: bool | IResolvable = None,
  enable_create_agent_button: bool | IResolvable = None,
  enable_people_search: bool | IResolvable = None,
  enable_quality_feedback: bool | IResolvable = None,
  enable_safe_search: bool | IResolvable = None,
  enable_search_as_you_type: bool | IResolvable = None,
  enable_visual_content_summary: bool | IResolvable = None,
  generative_answer_config: DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig = None,
  interaction_type: str = None,
  result_description_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.dataStoreUiConfigs">data_store_ui_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a>]</code> | data_store_ui_configs block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.defaultSearchRequestOrderBy">default_search_request_order_by</a></code> | <code>str</code> | The default ordering for search results if specified. Used to set SearchRequest#orderBy on applicable requests. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.disableUserEventsCollection">disable_user_events_collection</a></code> | <code>bool \| cdktn.IResolvable</code> | If set to true, the widget will not collect user events. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableAutocomplete">enable_autocomplete</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether or not to enable autocomplete. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableCreateAgentButton">enable_create_agent_button</a></code> | <code>bool \| cdktn.IResolvable</code> | If set to true, the widget will enable the create agent button. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enablePeopleSearch">enable_people_search</a></code> | <code>bool \| cdktn.IResolvable</code> | If set to true, the widget will enable people search. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableQualityFeedback">enable_quality_feedback</a></code> | <code>bool \| cdktn.IResolvable</code> | Turn on or off collecting the search result quality feedback from end users. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableSafeSearch">enable_safe_search</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable safe search. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableSearchAsYouType">enable_search_as_you_type</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable search-as-you-type behavior for the search widget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableVisualContentSummary">enable_visual_content_summary</a></code> | <code>bool \| cdktn.IResolvable</code> | If set to true, the widget will enable visual content summary on applicable search requests. Only used by healthcare search. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.generativeAnswerConfig">generative_answer_config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a></code> | generative_answer_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.interactionType">interaction_type</a></code> | <code>str</code> | Describes widget (or web app) interaction type Possible values: ["SEARCH_ONLY", "SEARCH_WITH_ANSWER", "SEARCH_WITH_FOLLOW_UPS"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.resultDescriptionType">result_description_type</a></code> | <code>str</code> | Controls whether result extract is display and how (snippet or extractive answer). |

---

##### `data_store_ui_configs`<sup>Optional</sup> <a name="data_store_ui_configs" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.dataStoreUiConfigs"></a>

```python
data_store_ui_configs: IResolvable | typing.List[DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a>]

data_store_ui_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#data_store_ui_configs DiscoveryEngineWidgetConfig#data_store_ui_configs}

---

##### `default_search_request_order_by`<sup>Optional</sup> <a name="default_search_request_order_by" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.defaultSearchRequestOrderBy"></a>

```python
default_search_request_order_by: str
```

- *Type:* str

The default ordering for search results if specified. Used to set SearchRequest#orderBy on applicable requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#default_search_request_order_by DiscoveryEngineWidgetConfig#default_search_request_order_by}

---

##### `disable_user_events_collection`<sup>Optional</sup> <a name="disable_user_events_collection" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.disableUserEventsCollection"></a>

```python
disable_user_events_collection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If set to true, the widget will not collect user events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#disable_user_events_collection DiscoveryEngineWidgetConfig#disable_user_events_collection}

---

##### `enable_autocomplete`<sup>Optional</sup> <a name="enable_autocomplete" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableAutocomplete"></a>

```python
enable_autocomplete: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether or not to enable autocomplete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#enable_autocomplete DiscoveryEngineWidgetConfig#enable_autocomplete}

---

##### `enable_create_agent_button`<sup>Optional</sup> <a name="enable_create_agent_button" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableCreateAgentButton"></a>

```python
enable_create_agent_button: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If set to true, the widget will enable the create agent button.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#enable_create_agent_button DiscoveryEngineWidgetConfig#enable_create_agent_button}

---

##### `enable_people_search`<sup>Optional</sup> <a name="enable_people_search" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enablePeopleSearch"></a>

```python
enable_people_search: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If set to true, the widget will enable people search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#enable_people_search DiscoveryEngineWidgetConfig#enable_people_search}

---

##### `enable_quality_feedback`<sup>Optional</sup> <a name="enable_quality_feedback" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableQualityFeedback"></a>

```python
enable_quality_feedback: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Turn on or off collecting the search result quality feedback from end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#enable_quality_feedback DiscoveryEngineWidgetConfig#enable_quality_feedback}

---

##### `enable_safe_search`<sup>Optional</sup> <a name="enable_safe_search" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableSafeSearch"></a>

```python
enable_safe_search: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to enable safe search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#enable_safe_search DiscoveryEngineWidgetConfig#enable_safe_search}

---

##### `enable_search_as_you_type`<sup>Optional</sup> <a name="enable_search_as_you_type" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableSearchAsYouType"></a>

```python
enable_search_as_you_type: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to enable search-as-you-type behavior for the search widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#enable_search_as_you_type DiscoveryEngineWidgetConfig#enable_search_as_you_type}

---

##### `enable_visual_content_summary`<sup>Optional</sup> <a name="enable_visual_content_summary" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableVisualContentSummary"></a>

```python
enable_visual_content_summary: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If set to true, the widget will enable visual content summary on applicable search requests. Only used by healthcare search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#enable_visual_content_summary DiscoveryEngineWidgetConfig#enable_visual_content_summary}

---

##### `generative_answer_config`<sup>Optional</sup> <a name="generative_answer_config" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.generativeAnswerConfig"></a>

```python
generative_answer_config: DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a>

generative_answer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#generative_answer_config DiscoveryEngineWidgetConfig#generative_answer_config}

---

##### `interaction_type`<sup>Optional</sup> <a name="interaction_type" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.interactionType"></a>

```python
interaction_type: str
```

- *Type:* str

Describes widget (or web app) interaction type Possible values: ["SEARCH_ONLY", "SEARCH_WITH_ANSWER", "SEARCH_WITH_FOLLOW_UPS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#interaction_type DiscoveryEngineWidgetConfig#interaction_type}

---

##### `result_description_type`<sup>Optional</sup> <a name="result_description_type" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.resultDescriptionType"></a>

```python
result_description_type: str
```

- *Type:* str

Controls whether result extract is display and how (snippet or extractive answer).

Default to no result if unspecified. Possible values: ["SNIPPET", "EXTRACTIVE_ANSWER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#result_description_type DiscoveryEngineWidgetConfig#result_description_type}

---

### DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs <a name="DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_widget_config

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs(
  facet_field: IResolvable | typing.List[DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField] = None,
  fields_ui_components_map: IResolvable | typing.List[DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.property.facetField">facet_field</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a>]</code> | facet_field block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.property.fieldsUiComponentsMap">fields_ui_components_map</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a>]</code> | fields_ui_components_map block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.property.name">name</a></code> | <code>str</code> | The name of the data store. |

---

##### `facet_field`<sup>Optional</sup> <a name="facet_field" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.property.facetField"></a>

```python
facet_field: IResolvable | typing.List[DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a>]

facet_field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#facet_field DiscoveryEngineWidgetConfig#facet_field}

---

##### `fields_ui_components_map`<sup>Optional</sup> <a name="fields_ui_components_map" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.property.fieldsUiComponentsMap"></a>

```python
fields_ui_components_map: IResolvable | typing.List[DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a>]

fields_ui_components_map block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#fields_ui_components_map DiscoveryEngineWidgetConfig#fields_ui_components_map}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the data store.

It should be data store resource name. Format:
'projects/{project}/locations/{location}/collections/{collectionId}/dataStores/{dataStoreId}'.
For APIs under 'WidgetService', such as [WidgetService.LookUpWidgetConfig][],
the project number and location part is erased in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#name DiscoveryEngineWidgetConfig#name}

---

### DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField <a name="DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_widget_config

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField(
  field: str,
  display_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField.property.field">field</a></code> | <code>str</code> | Registered field name. The format is 'field.abc'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField.property.displayName">display_name</a></code> | <code>str</code> | The field name that end users will see. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField.property.field"></a>

```python
field: str
```

- *Type:* str

Registered field name. The format is 'field.abc'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#field DiscoveryEngineWidgetConfig#field}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The field name that end users will see.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#display_name DiscoveryEngineWidgetConfig#display_name}

---

### DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap <a name="DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_widget_config

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap(
  field: str,
  ui_component: str,
  device_visibility: typing.List[str] = None,
  display_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.field">field</a></code> | <code>str</code> | Registered field name. The format is 'field.abc'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.uiComponent">ui_component</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#ui_component DiscoveryEngineWidgetConfig#ui_component}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.deviceVisibility">device_visibility</a></code> | <code>typing.List[str]</code> | Possible values: ["MOBILE", "DESKTOP"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.displayTemplate">display_template</a></code> | <code>str</code> | The template to customize how the field is displayed. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.field"></a>

```python
field: str
```

- *Type:* str

Registered field name. The format is 'field.abc'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#field DiscoveryEngineWidgetConfig#field}

---

##### `ui_component`<sup>Required</sup> <a name="ui_component" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.uiComponent"></a>

```python
ui_component: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#ui_component DiscoveryEngineWidgetConfig#ui_component}.

---

##### `device_visibility`<sup>Optional</sup> <a name="device_visibility" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.deviceVisibility"></a>

```python
device_visibility: typing.List[str]
```

- *Type:* typing.List[str]

Possible values: ["MOBILE", "DESKTOP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#device_visibility DiscoveryEngineWidgetConfig#device_visibility}

---

##### `display_template`<sup>Optional</sup> <a name="display_template" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.displayTemplate"></a>

```python
display_template: str
```

- *Type:* str

The template to customize how the field is displayed.

An example value would be a string that looks like: "Price: {value}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#display_template DiscoveryEngineWidgetConfig#display_template}

---

### DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig <a name="DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_widget_config

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig(
  disable_related_questions: bool | IResolvable = None,
  ignore_adversarial_query: bool | IResolvable = None,
  ignore_low_relevant_content: bool | IResolvable = None,
  ignore_non_answer_seeking_query: bool | IResolvable = None,
  image_source: str = None,
  language_code: str = None,
  max_rephrase_steps: typing.Union[int, float] = None,
  model_prompt_preamble: str = None,
  model_version: str = None,
  result_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.disableRelatedQuestions">disable_related_questions</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether generated answer contains suggested related questions. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.ignoreAdversarialQuery">ignore_adversarial_query</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to filter out queries that are adversarial. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.ignoreLowRelevantContent">ignore_low_relevant_content</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to filter out queries that are not relevant to the content. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.ignoreNonAnswerSeekingQuery">ignore_non_answer_seeking_query</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to filter out queries that are not answer-seeking. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.imageSource">image_source</a></code> | <code>str</code> | Source of image returned in the answer. Possible values: ["ALL_AVAILABLE_SOURCES", "CORPUS_IMAGE_ONLY", "FIGURE_GENERATION_ONLY"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.languageCode">language_code</a></code> | <code>str</code> | Language code for Summary. Use language tags defined by [BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Note: This is an experimental feature. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.maxRephraseSteps">max_rephrase_steps</a></code> | <code>typing.Union[int, float]</code> | Max rephrase steps. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.modelPromptPreamble">model_prompt_preamble</a></code> | <code>str</code> | Text at the beginning of the prompt that instructs the model that generates the answer. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.modelVersion">model_version</a></code> | <code>str</code> | The model version used to generate the answer. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.resultCount">result_count</a></code> | <code>typing.Union[int, float]</code> | The number of top results to generate the answer from. Up to 10. |

---

##### `disable_related_questions`<sup>Optional</sup> <a name="disable_related_questions" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.disableRelatedQuestions"></a>

```python
disable_related_questions: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether generated answer contains suggested related questions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#disable_related_questions DiscoveryEngineWidgetConfig#disable_related_questions}

---

##### `ignore_adversarial_query`<sup>Optional</sup> <a name="ignore_adversarial_query" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.ignoreAdversarialQuery"></a>

```python
ignore_adversarial_query: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to filter out queries that are adversarial.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#ignore_adversarial_query DiscoveryEngineWidgetConfig#ignore_adversarial_query}

---

##### `ignore_low_relevant_content`<sup>Optional</sup> <a name="ignore_low_relevant_content" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.ignoreLowRelevantContent"></a>

```python
ignore_low_relevant_content: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to filter out queries that are not relevant to the content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#ignore_low_relevant_content DiscoveryEngineWidgetConfig#ignore_low_relevant_content}

---

##### `ignore_non_answer_seeking_query`<sup>Optional</sup> <a name="ignore_non_answer_seeking_query" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.ignoreNonAnswerSeekingQuery"></a>

```python
ignore_non_answer_seeking_query: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to filter out queries that are not answer-seeking.

The default value is 'false'. No answer is returned if the search query
is classified as a non-answer seeking query.
If this field is set to 'true', we skip generating answers for
non-answer seeking queries and return fallback messages instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#ignore_non_answer_seeking_query DiscoveryEngineWidgetConfig#ignore_non_answer_seeking_query}

---

##### `image_source`<sup>Optional</sup> <a name="image_source" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.imageSource"></a>

```python
image_source: str
```

- *Type:* str

Source of image returned in the answer. Possible values: ["ALL_AVAILABLE_SOURCES", "CORPUS_IMAGE_ONLY", "FIGURE_GENERATION_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#image_source DiscoveryEngineWidgetConfig#image_source}

---

##### `language_code`<sup>Optional</sup> <a name="language_code" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

Language code for Summary. Use language tags defined by [BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Note: This is an experimental feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#language_code DiscoveryEngineWidgetConfig#language_code}

---

##### `max_rephrase_steps`<sup>Optional</sup> <a name="max_rephrase_steps" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.maxRephraseSteps"></a>

```python
max_rephrase_steps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max rephrase steps.

The max number is 5 steps. If not set or
set to < 1, it will be set to 1 by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#max_rephrase_steps DiscoveryEngineWidgetConfig#max_rephrase_steps}

---

##### `model_prompt_preamble`<sup>Optional</sup> <a name="model_prompt_preamble" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.modelPromptPreamble"></a>

```python
model_prompt_preamble: str
```

- *Type:* str

Text at the beginning of the prompt that instructs the model that generates the answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#model_prompt_preamble DiscoveryEngineWidgetConfig#model_prompt_preamble}

---

##### `model_version`<sup>Optional</sup> <a name="model_version" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.modelVersion"></a>

```python
model_version: str
```

- *Type:* str

The model version used to generate the answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#model_version DiscoveryEngineWidgetConfig#model_version}

---

##### `result_count`<sup>Optional</sup> <a name="result_count" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.resultCount"></a>

```python
result_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of top results to generate the answer from. Up to 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#result_count DiscoveryEngineWidgetConfig#result_count}

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineWidgetConfigAccessSettingsOutputReference <a name="DiscoveryEngineWidgetConfigAccessSettingsOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_widget_config

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetAllowlistedDomains">reset_allowlisted_domains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetAllowPublicAccess">reset_allow_public_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetEnableWebApp">reset_enable_web_app</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetLanguageCode">reset_language_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetWorkforceIdentityPoolProvider">reset_workforce_identity_pool_provider</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowlisted_domains` <a name="reset_allowlisted_domains" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetAllowlistedDomains"></a>

```python
def reset_allowlisted_domains() -> None
```

##### `reset_allow_public_access` <a name="reset_allow_public_access" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetAllowPublicAccess"></a>

```python
def reset_allow_public_access() -> None
```

##### `reset_enable_web_app` <a name="reset_enable_web_app" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetEnableWebApp"></a>

```python
def reset_enable_web_app() -> None
```

##### `reset_language_code` <a name="reset_language_code" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetLanguageCode"></a>

```python
def reset_language_code() -> None
```

##### `reset_workforce_identity_pool_provider` <a name="reset_workforce_identity_pool_provider" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetWorkforceIdentityPoolProvider"></a>

```python
def reset_workforce_identity_pool_provider() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowlistedDomainsInput">allowlisted_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowPublicAccessInput">allow_public_access_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.enableWebAppInput">enable_web_app_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.languageCodeInput">language_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.workforceIdentityPoolProviderInput">workforce_identity_pool_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowlistedDomains">allowlisted_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowPublicAccess">allow_public_access</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.enableWebApp">enable_web_app</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.languageCode">language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.workforceIdentityPoolProvider">workforce_identity_pool_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings">DiscoveryEngineWidgetConfigAccessSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowlisted_domains_input`<sup>Optional</sup> <a name="allowlisted_domains_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowlistedDomainsInput"></a>

```python
allowlisted_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_public_access_input`<sup>Optional</sup> <a name="allow_public_access_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowPublicAccessInput"></a>

```python
allow_public_access_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_web_app_input`<sup>Optional</sup> <a name="enable_web_app_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.enableWebAppInput"></a>

```python
enable_web_app_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `language_code_input`<sup>Optional</sup> <a name="language_code_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.languageCodeInput"></a>

```python
language_code_input: str
```

- *Type:* str

---

##### `workforce_identity_pool_provider_input`<sup>Optional</sup> <a name="workforce_identity_pool_provider_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.workforceIdentityPoolProviderInput"></a>

```python
workforce_identity_pool_provider_input: str
```

- *Type:* str

---

##### `allowlisted_domains`<sup>Required</sup> <a name="allowlisted_domains" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowlistedDomains"></a>

```python
allowlisted_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_public_access`<sup>Required</sup> <a name="allow_public_access" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowPublicAccess"></a>

```python
allow_public_access: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_web_app`<sup>Required</sup> <a name="enable_web_app" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.enableWebApp"></a>

```python
enable_web_app: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

---

##### `workforce_identity_pool_provider`<sup>Required</sup> <a name="workforce_identity_pool_provider" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.workforceIdentityPoolProvider"></a>

```python
workforce_identity_pool_provider: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineWidgetConfigAccessSettings
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings">DiscoveryEngineWidgetConfigAccessSettings</a>

---


### DiscoveryEngineWidgetConfigHomepageSettingOutputReference <a name="DiscoveryEngineWidgetConfigHomepageSettingOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_widget_config

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.putShortcuts">put_shortcuts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.resetShortcuts">reset_shortcuts</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_shortcuts` <a name="put_shortcuts" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.putShortcuts"></a>

```python
def put_shortcuts(
  value: IResolvable | typing.List[DiscoveryEngineWidgetConfigHomepageSettingShortcuts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.putShortcuts.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts">DiscoveryEngineWidgetConfigHomepageSettingShortcuts</a>]

---

##### `reset_shortcuts` <a name="reset_shortcuts" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.resetShortcuts"></a>

```python
def reset_shortcuts() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.shortcuts">shortcuts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList">DiscoveryEngineWidgetConfigHomepageSettingShortcutsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.shortcutsInput">shortcuts_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts">DiscoveryEngineWidgetConfigHomepageSettingShortcuts</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting">DiscoveryEngineWidgetConfigHomepageSetting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `shortcuts`<sup>Required</sup> <a name="shortcuts" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.shortcuts"></a>

```python
shortcuts: DiscoveryEngineWidgetConfigHomepageSettingShortcutsList
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList">DiscoveryEngineWidgetConfigHomepageSettingShortcutsList</a>

---

##### `shortcuts_input`<sup>Optional</sup> <a name="shortcuts_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.shortcutsInput"></a>

```python
shortcuts_input: IResolvable | typing.List[DiscoveryEngineWidgetConfigHomepageSettingShortcuts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts">DiscoveryEngineWidgetConfigHomepageSettingShortcuts</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineWidgetConfigHomepageSetting
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting">DiscoveryEngineWidgetConfigHomepageSetting</a>

---


### DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference <a name="DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_widget_config

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.resetUrl">reset_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_url` <a name="reset_url" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon">DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon">DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon</a>

---


### DiscoveryEngineWidgetConfigHomepageSettingShortcutsList <a name="DiscoveryEngineWidgetConfigHomepageSettingShortcutsList" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_widget_config

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts">DiscoveryEngineWidgetConfigHomepageSettingShortcuts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DiscoveryEngineWidgetConfigHomepageSettingShortcuts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts">DiscoveryEngineWidgetConfigHomepageSettingShortcuts</a>]

---


### DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference <a name="DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_widget_config

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.putIcon">put_icon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resetDestinationUri">reset_destination_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resetIcon">reset_icon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_icon` <a name="put_icon" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.putIcon"></a>

```python
def put_icon(
  url: str = None
) -> None
```

###### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.putIcon.parameter.url"></a>

- *Type:* str

Image URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#url DiscoveryEngineWidgetConfig#url}

---

##### `reset_destination_uri` <a name="reset_destination_uri" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resetDestinationUri"></a>

```python
def reset_destination_uri() -> None
```

##### `reset_icon` <a name="reset_icon" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resetIcon"></a>

```python
def reset_icon() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.icon">icon</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference">DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.destinationUriInput">destination_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.iconInput">icon_input</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon">DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.destinationUri">destination_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts">DiscoveryEngineWidgetConfigHomepageSettingShortcuts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `icon`<sup>Required</sup> <a name="icon" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.icon"></a>

```python
icon: DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference">DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference</a>

---

##### `destination_uri_input`<sup>Optional</sup> <a name="destination_uri_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.destinationUriInput"></a>

```python
destination_uri_input: str
```

- *Type:* str

---

##### `icon_input`<sup>Optional</sup> <a name="icon_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.iconInput"></a>

```python
icon_input: DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon">DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon</a>

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `destination_uri`<sup>Required</sup> <a name="destination_uri" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.destinationUri"></a>

```python
destination_uri: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DiscoveryEngineWidgetConfigHomepageSettingShortcuts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts">DiscoveryEngineWidgetConfigHomepageSettingShortcuts</a>

---


### DiscoveryEngineWidgetConfigTimeoutsOutputReference <a name="DiscoveryEngineWidgetConfigTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_widget_config

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts">DiscoveryEngineWidgetConfigTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DiscoveryEngineWidgetConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts">DiscoveryEngineWidgetConfigTimeouts</a>

---


### DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference <a name="DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_widget_config

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.resetUrl">reset_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_url` <a name="reset_url" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo">DiscoveryEngineWidgetConfigUiBrandingLogo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineWidgetConfigUiBrandingLogo
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo">DiscoveryEngineWidgetConfigUiBrandingLogo</a>

---


### DiscoveryEngineWidgetConfigUiBrandingOutputReference <a name="DiscoveryEngineWidgetConfigUiBrandingOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_widget_config

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.putLogo">put_logo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.resetLogo">reset_logo</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_logo` <a name="put_logo" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.putLogo"></a>

```python
def put_logo(
  url: str = None
) -> None
```

###### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.putLogo.parameter.url"></a>

- *Type:* str

Image URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#url DiscoveryEngineWidgetConfig#url}

---

##### `reset_logo` <a name="reset_logo" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.resetLogo"></a>

```python
def reset_logo() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.property.logo">logo</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference">DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.property.logoInput">logo_input</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo">DiscoveryEngineWidgetConfigUiBrandingLogo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding">DiscoveryEngineWidgetConfigUiBranding</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.property.logo"></a>

```python
logo: DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference">DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference</a>

---

##### `logo_input`<sup>Optional</sup> <a name="logo_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.property.logoInput"></a>

```python
logo_input: DiscoveryEngineWidgetConfigUiBrandingLogo
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo">DiscoveryEngineWidgetConfigUiBrandingLogo</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineWidgetConfigUiBranding
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding">DiscoveryEngineWidgetConfigUiBranding</a>

---


### DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList <a name="DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_widget_config

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a>]

---


### DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference <a name="DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_widget_config

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.fieldInput">field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.fieldInput"></a>

```python
field_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a>

---


### DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList <a name="DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_widget_config

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a>]

---


### DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference <a name="DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_widget_config

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resetDeviceVisibility">reset_device_visibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resetDisplayTemplate">reset_display_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_device_visibility` <a name="reset_device_visibility" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resetDeviceVisibility"></a>

```python
def reset_device_visibility() -> None
```

##### `reset_display_template` <a name="reset_display_template" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resetDisplayTemplate"></a>

```python
def reset_display_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.deviceVisibilityInput">device_visibility_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.displayTemplateInput">display_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.fieldInput">field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.uiComponentInput">ui_component_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.deviceVisibility">device_visibility</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.displayTemplate">display_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.uiComponent">ui_component</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_visibility_input`<sup>Optional</sup> <a name="device_visibility_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.deviceVisibilityInput"></a>

```python
device_visibility_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_template_input`<sup>Optional</sup> <a name="display_template_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.displayTemplateInput"></a>

```python
display_template_input: str
```

- *Type:* str

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.fieldInput"></a>

```python
field_input: str
```

- *Type:* str

---

##### `ui_component_input`<sup>Optional</sup> <a name="ui_component_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.uiComponentInput"></a>

```python
ui_component_input: str
```

- *Type:* str

---

##### `device_visibility`<sup>Required</sup> <a name="device_visibility" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.deviceVisibility"></a>

```python
device_visibility: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_template`<sup>Required</sup> <a name="display_template" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.displayTemplate"></a>

```python
display_template: str
```

- *Type:* str

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `ui_component`<sup>Required</sup> <a name="ui_component" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.uiComponent"></a>

```python
ui_component: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a>

---


### DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList <a name="DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_widget_config

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a>]

---


### DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference <a name="DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_widget_config

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.putFacetField">put_facet_field</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.putFieldsUiComponentsMap">put_fields_ui_components_map</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resetFacetField">reset_facet_field</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resetFieldsUiComponentsMap">reset_fields_ui_components_map</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_facet_field` <a name="put_facet_field" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.putFacetField"></a>

```python
def put_facet_field(
  value: IResolvable | typing.List[DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.putFacetField.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a>]

---

##### `put_fields_ui_components_map` <a name="put_fields_ui_components_map" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.putFieldsUiComponentsMap"></a>

```python
def put_fields_ui_components_map(
  value: IResolvable | typing.List[DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.putFieldsUiComponentsMap.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a>]

---

##### `reset_facet_field` <a name="reset_facet_field" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resetFacetField"></a>

```python
def reset_facet_field() -> None
```

##### `reset_fields_ui_components_map` <a name="reset_fields_ui_components_map" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resetFieldsUiComponentsMap"></a>

```python
def reset_fields_ui_components_map() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.facetField">facet_field</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.fieldsUiComponentsMap">fields_ui_components_map</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.facetFieldInput">facet_field_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.fieldsUiComponentsMapInput">fields_ui_components_map_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `facet_field`<sup>Required</sup> <a name="facet_field" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.facetField"></a>

```python
facet_field: DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList</a>

---

##### `fields_ui_components_map`<sup>Required</sup> <a name="fields_ui_components_map" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.fieldsUiComponentsMap"></a>

```python
fields_ui_components_map: DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList</a>

---

##### `facet_field_input`<sup>Optional</sup> <a name="facet_field_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.facetFieldInput"></a>

```python
facet_field_input: IResolvable | typing.List[DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a>]

---

##### `fields_ui_components_map_input`<sup>Optional</sup> <a name="fields_ui_components_map_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.fieldsUiComponentsMapInput"></a>

```python
fields_ui_components_map_input: IResolvable | typing.List[DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a>

---


### DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference <a name="DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_widget_config

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetDisableRelatedQuestions">reset_disable_related_questions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetIgnoreAdversarialQuery">reset_ignore_adversarial_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetIgnoreLowRelevantContent">reset_ignore_low_relevant_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetIgnoreNonAnswerSeekingQuery">reset_ignore_non_answer_seeking_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetImageSource">reset_image_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetLanguageCode">reset_language_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetMaxRephraseSteps">reset_max_rephrase_steps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetModelPromptPreamble">reset_model_prompt_preamble</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetModelVersion">reset_model_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetResultCount">reset_result_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disable_related_questions` <a name="reset_disable_related_questions" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetDisableRelatedQuestions"></a>

```python
def reset_disable_related_questions() -> None
```

##### `reset_ignore_adversarial_query` <a name="reset_ignore_adversarial_query" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetIgnoreAdversarialQuery"></a>

```python
def reset_ignore_adversarial_query() -> None
```

##### `reset_ignore_low_relevant_content` <a name="reset_ignore_low_relevant_content" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetIgnoreLowRelevantContent"></a>

```python
def reset_ignore_low_relevant_content() -> None
```

##### `reset_ignore_non_answer_seeking_query` <a name="reset_ignore_non_answer_seeking_query" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetIgnoreNonAnswerSeekingQuery"></a>

```python
def reset_ignore_non_answer_seeking_query() -> None
```

##### `reset_image_source` <a name="reset_image_source" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetImageSource"></a>

```python
def reset_image_source() -> None
```

##### `reset_language_code` <a name="reset_language_code" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetLanguageCode"></a>

```python
def reset_language_code() -> None
```

##### `reset_max_rephrase_steps` <a name="reset_max_rephrase_steps" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetMaxRephraseSteps"></a>

```python
def reset_max_rephrase_steps() -> None
```

##### `reset_model_prompt_preamble` <a name="reset_model_prompt_preamble" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetModelPromptPreamble"></a>

```python
def reset_model_prompt_preamble() -> None
```

##### `reset_model_version` <a name="reset_model_version" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetModelVersion"></a>

```python
def reset_model_version() -> None
```

##### `reset_result_count` <a name="reset_result_count" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetResultCount"></a>

```python
def reset_result_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.disableRelatedQuestionsInput">disable_related_questions_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreAdversarialQueryInput">ignore_adversarial_query_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreLowRelevantContentInput">ignore_low_relevant_content_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreNonAnswerSeekingQueryInput">ignore_non_answer_seeking_query_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.imageSourceInput">image_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.languageCodeInput">language_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.maxRephraseStepsInput">max_rephrase_steps_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelPromptPreambleInput">model_prompt_preamble_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelVersionInput">model_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.resultCountInput">result_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.disableRelatedQuestions">disable_related_questions</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreAdversarialQuery">ignore_adversarial_query</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreLowRelevantContent">ignore_low_relevant_content</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreNonAnswerSeekingQuery">ignore_non_answer_seeking_query</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.imageSource">image_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.languageCode">language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.maxRephraseSteps">max_rephrase_steps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelPromptPreamble">model_prompt_preamble</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelVersion">model_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.resultCount">result_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disable_related_questions_input`<sup>Optional</sup> <a name="disable_related_questions_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.disableRelatedQuestionsInput"></a>

```python
disable_related_questions_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ignore_adversarial_query_input`<sup>Optional</sup> <a name="ignore_adversarial_query_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreAdversarialQueryInput"></a>

```python
ignore_adversarial_query_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ignore_low_relevant_content_input`<sup>Optional</sup> <a name="ignore_low_relevant_content_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreLowRelevantContentInput"></a>

```python
ignore_low_relevant_content_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ignore_non_answer_seeking_query_input`<sup>Optional</sup> <a name="ignore_non_answer_seeking_query_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreNonAnswerSeekingQueryInput"></a>

```python
ignore_non_answer_seeking_query_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `image_source_input`<sup>Optional</sup> <a name="image_source_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.imageSourceInput"></a>

```python
image_source_input: str
```

- *Type:* str

---

##### `language_code_input`<sup>Optional</sup> <a name="language_code_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.languageCodeInput"></a>

```python
language_code_input: str
```

- *Type:* str

---

##### `max_rephrase_steps_input`<sup>Optional</sup> <a name="max_rephrase_steps_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.maxRephraseStepsInput"></a>

```python
max_rephrase_steps_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_prompt_preamble_input`<sup>Optional</sup> <a name="model_prompt_preamble_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelPromptPreambleInput"></a>

```python
model_prompt_preamble_input: str
```

- *Type:* str

---

##### `model_version_input`<sup>Optional</sup> <a name="model_version_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelVersionInput"></a>

```python
model_version_input: str
```

- *Type:* str

---

##### `result_count_input`<sup>Optional</sup> <a name="result_count_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.resultCountInput"></a>

```python
result_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disable_related_questions`<sup>Required</sup> <a name="disable_related_questions" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.disableRelatedQuestions"></a>

```python
disable_related_questions: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ignore_adversarial_query`<sup>Required</sup> <a name="ignore_adversarial_query" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreAdversarialQuery"></a>

```python
ignore_adversarial_query: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ignore_low_relevant_content`<sup>Required</sup> <a name="ignore_low_relevant_content" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreLowRelevantContent"></a>

```python
ignore_low_relevant_content: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ignore_non_answer_seeking_query`<sup>Required</sup> <a name="ignore_non_answer_seeking_query" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreNonAnswerSeekingQuery"></a>

```python
ignore_non_answer_seeking_query: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `image_source`<sup>Required</sup> <a name="image_source" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.imageSource"></a>

```python
image_source: str
```

- *Type:* str

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

---

##### `max_rephrase_steps`<sup>Required</sup> <a name="max_rephrase_steps" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.maxRephraseSteps"></a>

```python
max_rephrase_steps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_prompt_preamble`<sup>Required</sup> <a name="model_prompt_preamble" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelPromptPreamble"></a>

```python
model_prompt_preamble: str
```

- *Type:* str

---

##### `model_version`<sup>Required</sup> <a name="model_version" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelVersion"></a>

```python
model_version: str
```

- *Type:* str

---

##### `result_count`<sup>Required</sup> <a name="result_count" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.resultCount"></a>

```python
result_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a>

---


### DiscoveryEngineWidgetConfigUiSettingsOutputReference <a name="DiscoveryEngineWidgetConfigUiSettingsOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_widget_config

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.putDataStoreUiConfigs">put_data_store_ui_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.putGenerativeAnswerConfig">put_generative_answer_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetDataStoreUiConfigs">reset_data_store_ui_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetDefaultSearchRequestOrderBy">reset_default_search_request_order_by</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetDisableUserEventsCollection">reset_disable_user_events_collection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableAutocomplete">reset_enable_autocomplete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableCreateAgentButton">reset_enable_create_agent_button</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnablePeopleSearch">reset_enable_people_search</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableQualityFeedback">reset_enable_quality_feedback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableSafeSearch">reset_enable_safe_search</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableSearchAsYouType">reset_enable_search_as_you_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableVisualContentSummary">reset_enable_visual_content_summary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetGenerativeAnswerConfig">reset_generative_answer_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetInteractionType">reset_interaction_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetResultDescriptionType">reset_result_description_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_store_ui_configs` <a name="put_data_store_ui_configs" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.putDataStoreUiConfigs"></a>

```python
def put_data_store_ui_configs(
  value: IResolvable | typing.List[DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.putDataStoreUiConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a>]

---

##### `put_generative_answer_config` <a name="put_generative_answer_config" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.putGenerativeAnswerConfig"></a>

```python
def put_generative_answer_config(
  disable_related_questions: bool | IResolvable = None,
  ignore_adversarial_query: bool | IResolvable = None,
  ignore_low_relevant_content: bool | IResolvable = None,
  ignore_non_answer_seeking_query: bool | IResolvable = None,
  image_source: str = None,
  language_code: str = None,
  max_rephrase_steps: typing.Union[int, float] = None,
  model_prompt_preamble: str = None,
  model_version: str = None,
  result_count: typing.Union[int, float] = None
) -> None
```

###### `disable_related_questions`<sup>Optional</sup> <a name="disable_related_questions" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.putGenerativeAnswerConfig.parameter.disableRelatedQuestions"></a>

- *Type:* bool | cdktn.IResolvable

Whether generated answer contains suggested related questions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#disable_related_questions DiscoveryEngineWidgetConfig#disable_related_questions}

---

###### `ignore_adversarial_query`<sup>Optional</sup> <a name="ignore_adversarial_query" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.putGenerativeAnswerConfig.parameter.ignoreAdversarialQuery"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to filter out queries that are adversarial.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#ignore_adversarial_query DiscoveryEngineWidgetConfig#ignore_adversarial_query}

---

###### `ignore_low_relevant_content`<sup>Optional</sup> <a name="ignore_low_relevant_content" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.putGenerativeAnswerConfig.parameter.ignoreLowRelevantContent"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to filter out queries that are not relevant to the content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#ignore_low_relevant_content DiscoveryEngineWidgetConfig#ignore_low_relevant_content}

---

###### `ignore_non_answer_seeking_query`<sup>Optional</sup> <a name="ignore_non_answer_seeking_query" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.putGenerativeAnswerConfig.parameter.ignoreNonAnswerSeekingQuery"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to filter out queries that are not answer-seeking.

The default value is 'false'. No answer is returned if the search query
is classified as a non-answer seeking query.
If this field is set to 'true', we skip generating answers for
non-answer seeking queries and return fallback messages instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#ignore_non_answer_seeking_query DiscoveryEngineWidgetConfig#ignore_non_answer_seeking_query}

---

###### `image_source`<sup>Optional</sup> <a name="image_source" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.putGenerativeAnswerConfig.parameter.imageSource"></a>

- *Type:* str

Source of image returned in the answer. Possible values: ["ALL_AVAILABLE_SOURCES", "CORPUS_IMAGE_ONLY", "FIGURE_GENERATION_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#image_source DiscoveryEngineWidgetConfig#image_source}

---

###### `language_code`<sup>Optional</sup> <a name="language_code" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.putGenerativeAnswerConfig.parameter.languageCode"></a>

- *Type:* str

Language code for Summary. Use language tags defined by [BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Note: This is an experimental feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#language_code DiscoveryEngineWidgetConfig#language_code}

---

###### `max_rephrase_steps`<sup>Optional</sup> <a name="max_rephrase_steps" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.putGenerativeAnswerConfig.parameter.maxRephraseSteps"></a>

- *Type:* typing.Union[int, float]

Max rephrase steps.

The max number is 5 steps. If not set or
set to < 1, it will be set to 1 by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#max_rephrase_steps DiscoveryEngineWidgetConfig#max_rephrase_steps}

---

###### `model_prompt_preamble`<sup>Optional</sup> <a name="model_prompt_preamble" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.putGenerativeAnswerConfig.parameter.modelPromptPreamble"></a>

- *Type:* str

Text at the beginning of the prompt that instructs the model that generates the answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#model_prompt_preamble DiscoveryEngineWidgetConfig#model_prompt_preamble}

---

###### `model_version`<sup>Optional</sup> <a name="model_version" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.putGenerativeAnswerConfig.parameter.modelVersion"></a>

- *Type:* str

The model version used to generate the answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#model_version DiscoveryEngineWidgetConfig#model_version}

---

###### `result_count`<sup>Optional</sup> <a name="result_count" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.putGenerativeAnswerConfig.parameter.resultCount"></a>

- *Type:* typing.Union[int, float]

The number of top results to generate the answer from. Up to 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#result_count DiscoveryEngineWidgetConfig#result_count}

---

##### `reset_data_store_ui_configs` <a name="reset_data_store_ui_configs" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetDataStoreUiConfigs"></a>

```python
def reset_data_store_ui_configs() -> None
```

##### `reset_default_search_request_order_by` <a name="reset_default_search_request_order_by" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetDefaultSearchRequestOrderBy"></a>

```python
def reset_default_search_request_order_by() -> None
```

##### `reset_disable_user_events_collection` <a name="reset_disable_user_events_collection" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetDisableUserEventsCollection"></a>

```python
def reset_disable_user_events_collection() -> None
```

##### `reset_enable_autocomplete` <a name="reset_enable_autocomplete" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableAutocomplete"></a>

```python
def reset_enable_autocomplete() -> None
```

##### `reset_enable_create_agent_button` <a name="reset_enable_create_agent_button" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableCreateAgentButton"></a>

```python
def reset_enable_create_agent_button() -> None
```

##### `reset_enable_people_search` <a name="reset_enable_people_search" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnablePeopleSearch"></a>

```python
def reset_enable_people_search() -> None
```

##### `reset_enable_quality_feedback` <a name="reset_enable_quality_feedback" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableQualityFeedback"></a>

```python
def reset_enable_quality_feedback() -> None
```

##### `reset_enable_safe_search` <a name="reset_enable_safe_search" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableSafeSearch"></a>

```python
def reset_enable_safe_search() -> None
```

##### `reset_enable_search_as_you_type` <a name="reset_enable_search_as_you_type" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableSearchAsYouType"></a>

```python
def reset_enable_search_as_you_type() -> None
```

##### `reset_enable_visual_content_summary` <a name="reset_enable_visual_content_summary" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableVisualContentSummary"></a>

```python
def reset_enable_visual_content_summary() -> None
```

##### `reset_generative_answer_config` <a name="reset_generative_answer_config" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetGenerativeAnswerConfig"></a>

```python
def reset_generative_answer_config() -> None
```

##### `reset_interaction_type` <a name="reset_interaction_type" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetInteractionType"></a>

```python
def reset_interaction_type() -> None
```

##### `reset_result_description_type` <a name="reset_result_description_type" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetResultDescriptionType"></a>

```python
def reset_result_description_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.dataStoreUiConfigs">data_store_ui_configs</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.generativeAnswerConfig">generative_answer_config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference">DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.dataStoreUiConfigsInput">data_store_ui_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.defaultSearchRequestOrderByInput">default_search_request_order_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.disableUserEventsCollectionInput">disable_user_events_collection_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableAutocompleteInput">enable_autocomplete_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableCreateAgentButtonInput">enable_create_agent_button_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enablePeopleSearchInput">enable_people_search_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableQualityFeedbackInput">enable_quality_feedback_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSafeSearchInput">enable_safe_search_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSearchAsYouTypeInput">enable_search_as_you_type_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableVisualContentSummaryInput">enable_visual_content_summary_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.generativeAnswerConfigInput">generative_answer_config_input</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.interactionTypeInput">interaction_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.resultDescriptionTypeInput">result_description_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.defaultSearchRequestOrderBy">default_search_request_order_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.disableUserEventsCollection">disable_user_events_collection</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableAutocomplete">enable_autocomplete</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableCreateAgentButton">enable_create_agent_button</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enablePeopleSearch">enable_people_search</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableQualityFeedback">enable_quality_feedback</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSafeSearch">enable_safe_search</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSearchAsYouType">enable_search_as_you_type</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableVisualContentSummary">enable_visual_content_summary</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.interactionType">interaction_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.resultDescriptionType">result_description_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings">DiscoveryEngineWidgetConfigUiSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_store_ui_configs`<sup>Required</sup> <a name="data_store_ui_configs" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.dataStoreUiConfigs"></a>

```python
data_store_ui_configs: DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList</a>

---

##### `generative_answer_config`<sup>Required</sup> <a name="generative_answer_config" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.generativeAnswerConfig"></a>

```python
generative_answer_config: DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference">DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference</a>

---

##### `data_store_ui_configs_input`<sup>Optional</sup> <a name="data_store_ui_configs_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.dataStoreUiConfigsInput"></a>

```python
data_store_ui_configs_input: IResolvable | typing.List[DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a>]

---

##### `default_search_request_order_by_input`<sup>Optional</sup> <a name="default_search_request_order_by_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.defaultSearchRequestOrderByInput"></a>

```python
default_search_request_order_by_input: str
```

- *Type:* str

---

##### `disable_user_events_collection_input`<sup>Optional</sup> <a name="disable_user_events_collection_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.disableUserEventsCollectionInput"></a>

```python
disable_user_events_collection_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_autocomplete_input`<sup>Optional</sup> <a name="enable_autocomplete_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableAutocompleteInput"></a>

```python
enable_autocomplete_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_create_agent_button_input`<sup>Optional</sup> <a name="enable_create_agent_button_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableCreateAgentButtonInput"></a>

```python
enable_create_agent_button_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_people_search_input`<sup>Optional</sup> <a name="enable_people_search_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enablePeopleSearchInput"></a>

```python
enable_people_search_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_quality_feedback_input`<sup>Optional</sup> <a name="enable_quality_feedback_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableQualityFeedbackInput"></a>

```python
enable_quality_feedback_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_safe_search_input`<sup>Optional</sup> <a name="enable_safe_search_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSafeSearchInput"></a>

```python
enable_safe_search_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_search_as_you_type_input`<sup>Optional</sup> <a name="enable_search_as_you_type_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSearchAsYouTypeInput"></a>

```python
enable_search_as_you_type_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_visual_content_summary_input`<sup>Optional</sup> <a name="enable_visual_content_summary_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableVisualContentSummaryInput"></a>

```python
enable_visual_content_summary_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `generative_answer_config_input`<sup>Optional</sup> <a name="generative_answer_config_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.generativeAnswerConfigInput"></a>

```python
generative_answer_config_input: DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a>

---

##### `interaction_type_input`<sup>Optional</sup> <a name="interaction_type_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.interactionTypeInput"></a>

```python
interaction_type_input: str
```

- *Type:* str

---

##### `result_description_type_input`<sup>Optional</sup> <a name="result_description_type_input" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.resultDescriptionTypeInput"></a>

```python
result_description_type_input: str
```

- *Type:* str

---

##### `default_search_request_order_by`<sup>Required</sup> <a name="default_search_request_order_by" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.defaultSearchRequestOrderBy"></a>

```python
default_search_request_order_by: str
```

- *Type:* str

---

##### `disable_user_events_collection`<sup>Required</sup> <a name="disable_user_events_collection" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.disableUserEventsCollection"></a>

```python
disable_user_events_collection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_autocomplete`<sup>Required</sup> <a name="enable_autocomplete" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableAutocomplete"></a>

```python
enable_autocomplete: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_create_agent_button`<sup>Required</sup> <a name="enable_create_agent_button" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableCreateAgentButton"></a>

```python
enable_create_agent_button: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_people_search`<sup>Required</sup> <a name="enable_people_search" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enablePeopleSearch"></a>

```python
enable_people_search: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_quality_feedback`<sup>Required</sup> <a name="enable_quality_feedback" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableQualityFeedback"></a>

```python
enable_quality_feedback: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_safe_search`<sup>Required</sup> <a name="enable_safe_search" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSafeSearch"></a>

```python
enable_safe_search: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_search_as_you_type`<sup>Required</sup> <a name="enable_search_as_you_type" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSearchAsYouType"></a>

```python
enable_search_as_you_type: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_visual_content_summary`<sup>Required</sup> <a name="enable_visual_content_summary" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableVisualContentSummary"></a>

```python
enable_visual_content_summary: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `interaction_type`<sup>Required</sup> <a name="interaction_type" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.interactionType"></a>

```python
interaction_type: str
```

- *Type:* str

---

##### `result_description_type`<sup>Required</sup> <a name="result_description_type" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.resultDescriptionType"></a>

```python
result_description_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineWidgetConfigUiSettings
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings">DiscoveryEngineWidgetConfigUiSettings</a>

---



