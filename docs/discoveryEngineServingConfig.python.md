# `discoveryEngineServingConfig` Submodule <a name="`discoveryEngineServingConfig` Submodule" id="@cdktn/provider-google.discoveryEngineServingConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineServingConfig <a name="DiscoveryEngineServingConfig" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config google_discovery_engine_serving_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_serving_config

discoveryEngineServingConfig.DiscoveryEngineServingConfig(
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
  boost_control_ids: typing.List[str] = None,
  collection_id: str = None,
  filter_control_ids: typing.List[str] = None,
  id: str = None,
  project: str = None,
  promote_control_ids: typing.List[str] = None,
  redirect_control_ids: typing.List[str] = None,
  serving_config_id: str = None,
  synonyms_control_ids: typing.List[str] = None,
  timeouts: DiscoveryEngineServingConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.engineId">engine_id</a></code> | <code>str</code> | The ID of the engine associated with the serving config. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.location">location</a></code> | <code>str</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.boostControlIds">boost_control_ids</a></code> | <code>typing.List[str]</code> | The resource IDs of the boost controls to be applied. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.collectionId">collection_id</a></code> | <code>str</code> | The collection ID. Currently only accepts "default_collection". |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.filterControlIds">filter_control_ids</a></code> | <code>typing.List[str]</code> | The resource IDs of the filter controls to be applied. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#id DiscoveryEngineServingConfig#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#project DiscoveryEngineServingConfig#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.promoteControlIds">promote_control_ids</a></code> | <code>typing.List[str]</code> | The resource IDs of the promote controls to be applied. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.redirectControlIds">redirect_control_ids</a></code> | <code>typing.List[str]</code> | The resource IDs of the redirect controls to be applied. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.servingConfigId">serving_config_id</a></code> | <code>str</code> | 'The unique ID of the serving config. Currently only accepts "default_search".'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.synonymsControlIds">synonyms_control_ids</a></code> | <code>typing.List[str]</code> | The resource IDs of the synonyms controls to be applied. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts">DiscoveryEngineServingConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.engineId"></a>

- *Type:* str

The ID of the engine associated with the serving config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#engine_id DiscoveryEngineServingConfig#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.location"></a>

- *Type:* str

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#location DiscoveryEngineServingConfig#location}

---

##### `boost_control_ids`<sup>Optional</sup> <a name="boost_control_ids" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.boostControlIds"></a>

- *Type:* typing.List[str]

The resource IDs of the boost controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#boost_control_ids DiscoveryEngineServingConfig#boost_control_ids}

---

##### `collection_id`<sup>Optional</sup> <a name="collection_id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.collectionId"></a>

- *Type:* str

The collection ID. Currently only accepts "default_collection".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#collection_id DiscoveryEngineServingConfig#collection_id}

---

##### `filter_control_ids`<sup>Optional</sup> <a name="filter_control_ids" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.filterControlIds"></a>

- *Type:* typing.List[str]

The resource IDs of the filter controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#filter_control_ids DiscoveryEngineServingConfig#filter_control_ids}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#id DiscoveryEngineServingConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#project DiscoveryEngineServingConfig#project}.

---

##### `promote_control_ids`<sup>Optional</sup> <a name="promote_control_ids" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.promoteControlIds"></a>

- *Type:* typing.List[str]

The resource IDs of the promote controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#promote_control_ids DiscoveryEngineServingConfig#promote_control_ids}

---

##### `redirect_control_ids`<sup>Optional</sup> <a name="redirect_control_ids" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.redirectControlIds"></a>

- *Type:* typing.List[str]

The resource IDs of the redirect controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#redirect_control_ids DiscoveryEngineServingConfig#redirect_control_ids}

---

##### `serving_config_id`<sup>Optional</sup> <a name="serving_config_id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.servingConfigId"></a>

- *Type:* str

'The unique ID of the serving config. Currently only accepts "default_search".'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#serving_config_id DiscoveryEngineServingConfig#serving_config_id}

---

##### `synonyms_control_ids`<sup>Optional</sup> <a name="synonyms_control_ids" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.synonymsControlIds"></a>

- *Type:* typing.List[str]

The resource IDs of the synonyms controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#synonyms_control_ids DiscoveryEngineServingConfig#synonyms_control_ids}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts">DiscoveryEngineServingConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#timeouts DiscoveryEngineServingConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetBoostControlIds">reset_boost_control_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetCollectionId">reset_collection_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetFilterControlIds">reset_filter_control_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetPromoteControlIds">reset_promote_control_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetRedirectControlIds">reset_redirect_control_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetServingConfigId">reset_serving_config_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetSynonymsControlIds">reset_synonyms_control_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#create DiscoveryEngineServingConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#delete DiscoveryEngineServingConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#update DiscoveryEngineServingConfig#update}.

---

##### `reset_boost_control_ids` <a name="reset_boost_control_ids" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetBoostControlIds"></a>

```python
def reset_boost_control_ids() -> None
```

##### `reset_collection_id` <a name="reset_collection_id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetCollectionId"></a>

```python
def reset_collection_id() -> None
```

##### `reset_filter_control_ids` <a name="reset_filter_control_ids" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetFilterControlIds"></a>

```python
def reset_filter_control_ids() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_promote_control_ids` <a name="reset_promote_control_ids" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetPromoteControlIds"></a>

```python
def reset_promote_control_ids() -> None
```

##### `reset_redirect_control_ids` <a name="reset_redirect_control_ids" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetRedirectControlIds"></a>

```python
def reset_redirect_control_ids() -> None
```

##### `reset_serving_config_id` <a name="reset_serving_config_id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetServingConfigId"></a>

```python
def reset_serving_config_id() -> None
```

##### `reset_synonyms_control_ids` <a name="reset_synonyms_control_ids" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetSynonymsControlIds"></a>

```python
def reset_synonyms_control_ids() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DiscoveryEngineServingConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.isConstruct"></a>

```python
from cdktn_provider_google import discovery_engine_serving_config

discoveryEngineServingConfig.DiscoveryEngineServingConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.isTerraformElement"></a>

```python
from cdktn_provider_google import discovery_engine_serving_config

discoveryEngineServingConfig.DiscoveryEngineServingConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.isTerraformResource"></a>

```python
from cdktn_provider_google import discovery_engine_serving_config

discoveryEngineServingConfig.DiscoveryEngineServingConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.generateConfigForImport"></a>

```python
from cdktn_provider_google import discovery_engine_serving_config

discoveryEngineServingConfig.DiscoveryEngineServingConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DiscoveryEngineServingConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DiscoveryEngineServingConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DiscoveryEngineServingConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineServingConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference">DiscoveryEngineServingConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.boostControlIdsInput">boost_control_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.collectionIdInput">collection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.engineIdInput">engine_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.filterControlIdsInput">filter_control_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.promoteControlIdsInput">promote_control_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.redirectControlIdsInput">redirect_control_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.servingConfigIdInput">serving_config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.synonymsControlIdsInput">synonyms_control_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts">DiscoveryEngineServingConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.boostControlIds">boost_control_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.collectionId">collection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.engineId">engine_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.filterControlIds">filter_control_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.promoteControlIds">promote_control_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.redirectControlIds">redirect_control_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.servingConfigId">serving_config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.synonymsControlIds">synonyms_control_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.timeouts"></a>

```python
timeouts: DiscoveryEngineServingConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference">DiscoveryEngineServingConfigTimeoutsOutputReference</a>

---

##### `boost_control_ids_input`<sup>Optional</sup> <a name="boost_control_ids_input" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.boostControlIdsInput"></a>

```python
boost_control_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `collection_id_input`<sup>Optional</sup> <a name="collection_id_input" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.collectionIdInput"></a>

```python
collection_id_input: str
```

- *Type:* str

---

##### `engine_id_input`<sup>Optional</sup> <a name="engine_id_input" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.engineIdInput"></a>

```python
engine_id_input: str
```

- *Type:* str

---

##### `filter_control_ids_input`<sup>Optional</sup> <a name="filter_control_ids_input" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.filterControlIdsInput"></a>

```python
filter_control_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `promote_control_ids_input`<sup>Optional</sup> <a name="promote_control_ids_input" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.promoteControlIdsInput"></a>

```python
promote_control_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `redirect_control_ids_input`<sup>Optional</sup> <a name="redirect_control_ids_input" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.redirectControlIdsInput"></a>

```python
redirect_control_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `serving_config_id_input`<sup>Optional</sup> <a name="serving_config_id_input" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.servingConfigIdInput"></a>

```python
serving_config_id_input: str
```

- *Type:* str

---

##### `synonyms_control_ids_input`<sup>Optional</sup> <a name="synonyms_control_ids_input" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.synonymsControlIdsInput"></a>

```python
synonyms_control_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DiscoveryEngineServingConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts">DiscoveryEngineServingConfigTimeouts</a>

---

##### `boost_control_ids`<sup>Required</sup> <a name="boost_control_ids" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.boostControlIds"></a>

```python
boost_control_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.engineId"></a>

```python
engine_id: str
```

- *Type:* str

---

##### `filter_control_ids`<sup>Required</sup> <a name="filter_control_ids" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.filterControlIds"></a>

```python
filter_control_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `promote_control_ids`<sup>Required</sup> <a name="promote_control_ids" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.promoteControlIds"></a>

```python
promote_control_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `redirect_control_ids`<sup>Required</sup> <a name="redirect_control_ids" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.redirectControlIds"></a>

```python
redirect_control_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `serving_config_id`<sup>Required</sup> <a name="serving_config_id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.servingConfigId"></a>

```python
serving_config_id: str
```

- *Type:* str

---

##### `synonyms_control_ids`<sup>Required</sup> <a name="synonyms_control_ids" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.synonymsControlIds"></a>

```python
synonyms_control_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineServingConfigConfig <a name="DiscoveryEngineServingConfigConfig" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_serving_config

discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  engine_id: str,
  location: str,
  boost_control_ids: typing.List[str] = None,
  collection_id: str = None,
  filter_control_ids: typing.List[str] = None,
  id: str = None,
  project: str = None,
  promote_control_ids: typing.List[str] = None,
  redirect_control_ids: typing.List[str] = None,
  serving_config_id: str = None,
  synonyms_control_ids: typing.List[str] = None,
  timeouts: DiscoveryEngineServingConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.engineId">engine_id</a></code> | <code>str</code> | The ID of the engine associated with the serving config. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.location">location</a></code> | <code>str</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.boostControlIds">boost_control_ids</a></code> | <code>typing.List[str]</code> | The resource IDs of the boost controls to be applied. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.collectionId">collection_id</a></code> | <code>str</code> | The collection ID. Currently only accepts "default_collection". |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.filterControlIds">filter_control_ids</a></code> | <code>typing.List[str]</code> | The resource IDs of the filter controls to be applied. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#id DiscoveryEngineServingConfig#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#project DiscoveryEngineServingConfig#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.promoteControlIds">promote_control_ids</a></code> | <code>typing.List[str]</code> | The resource IDs of the promote controls to be applied. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.redirectControlIds">redirect_control_ids</a></code> | <code>typing.List[str]</code> | The resource IDs of the redirect controls to be applied. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.servingConfigId">serving_config_id</a></code> | <code>str</code> | 'The unique ID of the serving config. Currently only accepts "default_search".'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.synonymsControlIds">synonyms_control_ids</a></code> | <code>typing.List[str]</code> | The resource IDs of the synonyms controls to be applied. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts">DiscoveryEngineServingConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.engineId"></a>

```python
engine_id: str
```

- *Type:* str

The ID of the engine associated with the serving config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#engine_id DiscoveryEngineServingConfig#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#location DiscoveryEngineServingConfig#location}

---

##### `boost_control_ids`<sup>Optional</sup> <a name="boost_control_ids" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.boostControlIds"></a>

```python
boost_control_ids: typing.List[str]
```

- *Type:* typing.List[str]

The resource IDs of the boost controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#boost_control_ids DiscoveryEngineServingConfig#boost_control_ids}

---

##### `collection_id`<sup>Optional</sup> <a name="collection_id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

The collection ID. Currently only accepts "default_collection".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#collection_id DiscoveryEngineServingConfig#collection_id}

---

##### `filter_control_ids`<sup>Optional</sup> <a name="filter_control_ids" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.filterControlIds"></a>

```python
filter_control_ids: typing.List[str]
```

- *Type:* typing.List[str]

The resource IDs of the filter controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#filter_control_ids DiscoveryEngineServingConfig#filter_control_ids}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#id DiscoveryEngineServingConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#project DiscoveryEngineServingConfig#project}.

---

##### `promote_control_ids`<sup>Optional</sup> <a name="promote_control_ids" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.promoteControlIds"></a>

```python
promote_control_ids: typing.List[str]
```

- *Type:* typing.List[str]

The resource IDs of the promote controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#promote_control_ids DiscoveryEngineServingConfig#promote_control_ids}

---

##### `redirect_control_ids`<sup>Optional</sup> <a name="redirect_control_ids" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.redirectControlIds"></a>

```python
redirect_control_ids: typing.List[str]
```

- *Type:* typing.List[str]

The resource IDs of the redirect controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#redirect_control_ids DiscoveryEngineServingConfig#redirect_control_ids}

---

##### `serving_config_id`<sup>Optional</sup> <a name="serving_config_id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.servingConfigId"></a>

```python
serving_config_id: str
```

- *Type:* str

'The unique ID of the serving config. Currently only accepts "default_search".'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#serving_config_id DiscoveryEngineServingConfig#serving_config_id}

---

##### `synonyms_control_ids`<sup>Optional</sup> <a name="synonyms_control_ids" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.synonymsControlIds"></a>

```python
synonyms_control_ids: typing.List[str]
```

- *Type:* typing.List[str]

The resource IDs of the synonyms controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#synonyms_control_ids DiscoveryEngineServingConfig#synonyms_control_ids}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.timeouts"></a>

```python
timeouts: DiscoveryEngineServingConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts">DiscoveryEngineServingConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#timeouts DiscoveryEngineServingConfig#timeouts}

---

### DiscoveryEngineServingConfigTimeouts <a name="DiscoveryEngineServingConfigTimeouts" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_serving_config

discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#create DiscoveryEngineServingConfig#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#delete DiscoveryEngineServingConfig#delete}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#update DiscoveryEngineServingConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#create DiscoveryEngineServingConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#delete DiscoveryEngineServingConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#update DiscoveryEngineServingConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineServingConfigTimeoutsOutputReference <a name="DiscoveryEngineServingConfigTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_serving_config

discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts">DiscoveryEngineServingConfigTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DiscoveryEngineServingConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts">DiscoveryEngineServingConfigTimeouts</a>

---



