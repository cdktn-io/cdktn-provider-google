# `networkServicesWasmPlugin` Submodule <a name="`networkServicesWasmPlugin` Submodule" id="@cdktn/provider-google.networkServicesWasmPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesWasmPlugin <a name="NetworkServicesWasmPlugin" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin google_network_services_wasm_plugin}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer"></a>

```python
from cdktn_provider_google import network_services_wasm_plugin

networkServicesWasmPlugin.NetworkServicesWasmPlugin(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  main_version_id: str,
  name: str,
  versions: IResolvable | typing.List[NetworkServicesWasmPluginVersions],
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  log_config: NetworkServicesWasmPluginLogConfig = None,
  project: str = None,
  timeouts: NetworkServicesWasmPluginTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.mainVersionId">main_version_id</a></code> | <code>str</code> | The ID of the WasmPluginVersion resource that is the currently serving one. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.name">name</a></code> | <code>str</code> | Identifier. Name of the WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.versions">versions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>]</code> | versions block. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional. A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#id NetworkServicesWasmPlugin#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Set of labels associated with the WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the traffic extension. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.logConfig">log_config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig">NetworkServicesWasmPluginLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#project NetworkServicesWasmPlugin#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts">NetworkServicesWasmPluginTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `main_version_id`<sup>Required</sup> <a name="main_version_id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.mainVersionId"></a>

- *Type:* str

The ID of the WasmPluginVersion resource that is the currently serving one.

The version referred to must be a child of this WasmPlugin resource and should be listed in the "versions" field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#main_version_id NetworkServicesWasmPlugin#main_version_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.name"></a>

- *Type:* str

Identifier. Name of the WasmPlugin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#name NetworkServicesWasmPlugin#name}

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.versions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>]

versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#versions NetworkServicesWasmPlugin#versions}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#deletion_policy NetworkServicesWasmPlugin#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.description"></a>

- *Type:* str

Optional. A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#description NetworkServicesWasmPlugin#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#id NetworkServicesWasmPlugin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional. Set of labels associated with the WasmPlugin resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#labels NetworkServicesWasmPlugin#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.location"></a>

- *Type:* str

The location of the traffic extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#location NetworkServicesWasmPlugin#location}

---

##### `log_config`<sup>Optional</sup> <a name="log_config" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.logConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig">NetworkServicesWasmPluginLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#log_config NetworkServicesWasmPlugin#log_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#project NetworkServicesWasmPlugin#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts">NetworkServicesWasmPluginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#timeouts NetworkServicesWasmPlugin#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putLogConfig">put_log_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putVersions">put_versions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetLogConfig">reset_log_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_log_config` <a name="put_log_config" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putLogConfig"></a>

```python
def put_log_config(
  enable: bool | IResolvable = None,
  min_log_level: str = None,
  sample_rate: typing.Union[int, float] = None
) -> None
```

###### `enable`<sup>Optional</sup> <a name="enable" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putLogConfig.parameter.enable"></a>

- *Type:* bool | cdktn.IResolvable

Optional. Specifies whether to enable logging for activity by this plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#enable NetworkServicesWasmPlugin#enable}

---

###### `min_log_level`<sup>Optional</sup> <a name="min_log_level" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putLogConfig.parameter.minLogLevel"></a>

- *Type:* str

Non-empty default.

Specificies the lowest level of the plugin logs that are exported to Cloud Logging. This setting relates to the logs generated by using logging statements in your Wasm code.
This field is can be set only if logging is enabled for the plugin.
If the field is not provided when logging is enabled, it is set to INFO by default. Possible values: ["LOG_LEVEL_UNSPECIFIED", "TRACE", "DEBUG", "INFO", "WARN", "ERROR", "CRITICAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#min_log_level NetworkServicesWasmPlugin#min_log_level}

---

###### `sample_rate`<sup>Optional</sup> <a name="sample_rate" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putLogConfig.parameter.sampleRate"></a>

- *Type:* typing.Union[int, float]

Non-empty default.

Configures the sampling rate of activity logs, where 1.0 means all logged activity is reported and 0.0 means no activity is reported.
A floating point value between 0.0 and 1.0 indicates that a percentage of log messages is stored.
The default value when logging is enabled is 1.0. The value of the field must be between 0 and 1 (inclusive).
This field can be specified only if logging is enabled for this plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#sample_rate NetworkServicesWasmPlugin#sample_rate}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#create NetworkServicesWasmPlugin#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#delete NetworkServicesWasmPlugin#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#update NetworkServicesWasmPlugin#update}.

---

##### `put_versions` <a name="put_versions" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putVersions"></a>

```python
def put_versions(
  value: IResolvable | typing.List[NetworkServicesWasmPluginVersions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putVersions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>]

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_log_config` <a name="reset_log_config" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetLogConfig"></a>

```python
def reset_log_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworkServicesWasmPlugin resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isConstruct"></a>

```python
from cdktn_provider_google import network_services_wasm_plugin

networkServicesWasmPlugin.NetworkServicesWasmPlugin.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isTerraformElement"></a>

```python
from cdktn_provider_google import network_services_wasm_plugin

networkServicesWasmPlugin.NetworkServicesWasmPlugin.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isTerraformResource"></a>

```python
from cdktn_provider_google import network_services_wasm_plugin

networkServicesWasmPlugin.NetworkServicesWasmPlugin.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.generateConfigForImport"></a>

```python
from cdktn_provider_google import network_services_wasm_plugin

networkServicesWasmPlugin.NetworkServicesWasmPlugin.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworkServicesWasmPlugin resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkServicesWasmPlugin to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkServicesWasmPlugin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesWasmPlugin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.logConfig">log_config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference">NetworkServicesWasmPluginLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference">NetworkServicesWasmPluginTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.usedBy">used_by</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList">NetworkServicesWasmPluginUsedByList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.versions">versions</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList">NetworkServicesWasmPluginVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.logConfigInput">log_config_input</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig">NetworkServicesWasmPluginLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.mainVersionIdInput">main_version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts">NetworkServicesWasmPluginTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.versionsInput">versions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.mainVersionId">main_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `log_config`<sup>Required</sup> <a name="log_config" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.logConfig"></a>

```python
log_config: NetworkServicesWasmPluginLogConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference">NetworkServicesWasmPluginLogConfigOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.timeouts"></a>

```python
timeouts: NetworkServicesWasmPluginTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference">NetworkServicesWasmPluginTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `used_by`<sup>Required</sup> <a name="used_by" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.usedBy"></a>

```python
used_by: NetworkServicesWasmPluginUsedByList
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList">NetworkServicesWasmPluginUsedByList</a>

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.versions"></a>

```python
versions: NetworkServicesWasmPluginVersionsList
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList">NetworkServicesWasmPluginVersionsList</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `log_config_input`<sup>Optional</sup> <a name="log_config_input" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.logConfigInput"></a>

```python
log_config_input: NetworkServicesWasmPluginLogConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig">NetworkServicesWasmPluginLogConfig</a>

---

##### `main_version_id_input`<sup>Optional</sup> <a name="main_version_id_input" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.mainVersionIdInput"></a>

```python
main_version_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | NetworkServicesWasmPluginTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts">NetworkServicesWasmPluginTimeouts</a>

---

##### `versions_input`<sup>Optional</sup> <a name="versions_input" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.versionsInput"></a>

```python
versions_input: IResolvable | typing.List[NetworkServicesWasmPluginVersions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>]

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `main_version_id`<sup>Required</sup> <a name="main_version_id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.mainVersionId"></a>

```python
main_version_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesWasmPluginConfig <a name="NetworkServicesWasmPluginConfig" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.Initializer"></a>

```python
from cdktn_provider_google import network_services_wasm_plugin

networkServicesWasmPlugin.NetworkServicesWasmPluginConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  main_version_id: str,
  name: str,
  versions: IResolvable | typing.List[NetworkServicesWasmPluginVersions],
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  log_config: NetworkServicesWasmPluginLogConfig = None,
  project: str = None,
  timeouts: NetworkServicesWasmPluginTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.mainVersionId">main_version_id</a></code> | <code>str</code> | The ID of the WasmPluginVersion resource that is the currently serving one. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.name">name</a></code> | <code>str</code> | Identifier. Name of the WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.versions">versions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>]</code> | versions block. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.description">description</a></code> | <code>str</code> | Optional. A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#id NetworkServicesWasmPlugin#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Set of labels associated with the WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.location">location</a></code> | <code>str</code> | The location of the traffic extension. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.logConfig">log_config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig">NetworkServicesWasmPluginLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#project NetworkServicesWasmPlugin#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts">NetworkServicesWasmPluginTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `main_version_id`<sup>Required</sup> <a name="main_version_id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.mainVersionId"></a>

```python
main_version_id: str
```

- *Type:* str

The ID of the WasmPluginVersion resource that is the currently serving one.

The version referred to must be a child of this WasmPlugin resource and should be listed in the "versions" field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#main_version_id NetworkServicesWasmPlugin#main_version_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Identifier. Name of the WasmPlugin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#name NetworkServicesWasmPlugin#name}

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.versions"></a>

```python
versions: IResolvable | typing.List[NetworkServicesWasmPluginVersions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>]

versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#versions NetworkServicesWasmPlugin#versions}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#deletion_policy NetworkServicesWasmPlugin#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional. A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#description NetworkServicesWasmPlugin#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#id NetworkServicesWasmPlugin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. Set of labels associated with the WasmPlugin resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#labels NetworkServicesWasmPlugin#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the traffic extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#location NetworkServicesWasmPlugin#location}

---

##### `log_config`<sup>Optional</sup> <a name="log_config" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.logConfig"></a>

```python
log_config: NetworkServicesWasmPluginLogConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig">NetworkServicesWasmPluginLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#log_config NetworkServicesWasmPlugin#log_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#project NetworkServicesWasmPlugin#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.timeouts"></a>

```python
timeouts: NetworkServicesWasmPluginTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts">NetworkServicesWasmPluginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#timeouts NetworkServicesWasmPlugin#timeouts}

---

### NetworkServicesWasmPluginLogConfig <a name="NetworkServicesWasmPluginLogConfig" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig.Initializer"></a>

```python
from cdktn_provider_google import network_services_wasm_plugin

networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig(
  enable: bool | IResolvable = None,
  min_log_level: str = None,
  sample_rate: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig.property.enable">enable</a></code> | <code>bool \| cdktn.IResolvable</code> | Optional. Specifies whether to enable logging for activity by this plugin. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig.property.minLogLevel">min_log_level</a></code> | <code>str</code> | Non-empty default. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig.property.sampleRate">sample_rate</a></code> | <code>typing.Union[int, float]</code> | Non-empty default. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig.property.enable"></a>

```python
enable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Optional. Specifies whether to enable logging for activity by this plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#enable NetworkServicesWasmPlugin#enable}

---

##### `min_log_level`<sup>Optional</sup> <a name="min_log_level" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig.property.minLogLevel"></a>

```python
min_log_level: str
```

- *Type:* str

Non-empty default.

Specificies the lowest level of the plugin logs that are exported to Cloud Logging. This setting relates to the logs generated by using logging statements in your Wasm code.
This field is can be set only if logging is enabled for the plugin.
If the field is not provided when logging is enabled, it is set to INFO by default. Possible values: ["LOG_LEVEL_UNSPECIFIED", "TRACE", "DEBUG", "INFO", "WARN", "ERROR", "CRITICAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#min_log_level NetworkServicesWasmPlugin#min_log_level}

---

##### `sample_rate`<sup>Optional</sup> <a name="sample_rate" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig.property.sampleRate"></a>

```python
sample_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Non-empty default.

Configures the sampling rate of activity logs, where 1.0 means all logged activity is reported and 0.0 means no activity is reported.
A floating point value between 0.0 and 1.0 indicates that a percentage of log messages is stored.
The default value when logging is enabled is 1.0. The value of the field must be between 0 and 1 (inclusive).
This field can be specified only if logging is enabled for this plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#sample_rate NetworkServicesWasmPlugin#sample_rate}

---

### NetworkServicesWasmPluginTimeouts <a name="NetworkServicesWasmPluginTimeouts" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts.Initializer"></a>

```python
from cdktn_provider_google import network_services_wasm_plugin

networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#create NetworkServicesWasmPlugin#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#delete NetworkServicesWasmPlugin#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#update NetworkServicesWasmPlugin#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#create NetworkServicesWasmPlugin#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#delete NetworkServicesWasmPlugin#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#update NetworkServicesWasmPlugin#update}.

---

### NetworkServicesWasmPluginUsedBy <a name="NetworkServicesWasmPluginUsedBy" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedBy.Initializer"></a>

```python
from cdktn_provider_google import network_services_wasm_plugin

networkServicesWasmPlugin.NetworkServicesWasmPluginUsedBy()
```


### NetworkServicesWasmPluginVersions <a name="NetworkServicesWasmPluginVersions" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.Initializer"></a>

```python
from cdktn_provider_google import network_services_wasm_plugin

networkServicesWasmPlugin.NetworkServicesWasmPluginVersions(
  version_name: str,
  description: str = None,
  image_uri: str = None,
  labels: typing.Mapping[str] = None,
  plugin_config_data: str = None,
  plugin_config_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.versionName">version_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#version_name NetworkServicesWasmPlugin#version_name}. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.description">description</a></code> | <code>str</code> | Optional. A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.imageUri">image_uri</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Set of labels associated with the WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.pluginConfigData">plugin_config_data</a></code> | <code>str</code> | A base64-encoded string containing the configuration for the plugin. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.pluginConfigUri">plugin_config_uri</a></code> | <code>str</code> | URI of the plugin configuration stored in the Artifact Registry. |

---

##### `version_name`<sup>Required</sup> <a name="version_name" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.versionName"></a>

```python
version_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#version_name NetworkServicesWasmPlugin#version_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.description"></a>

```python
description: str
```

- *Type:* str

Optional. A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#description NetworkServicesWasmPlugin#description}

---

##### `image_uri`<sup>Optional</sup> <a name="image_uri" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

Optional.

URI of the container image containing the plugin, stored in the Artifact Registry. When a new WasmPluginVersion resource is created, the digest of the container image is saved in the imageDigest field.
When downloading an image, the digest value is used instead of an image tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#image_uri NetworkServicesWasmPlugin#image_uri}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. Set of labels associated with the WasmPlugin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#labels NetworkServicesWasmPlugin#labels}

---

##### `plugin_config_data`<sup>Optional</sup> <a name="plugin_config_data" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.pluginConfigData"></a>

```python
plugin_config_data: str
```

- *Type:* str

A base64-encoded string containing the configuration for the plugin.

The configuration is provided to the plugin at runtime through the ON_CONFIGURE callback.
When a new WasmPluginVersion resource is created, the digest of the contents is saved in the pluginConfigDigest field.
Conflics with pluginConfigUri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#plugin_config_data NetworkServicesWasmPlugin#plugin_config_data}

---

##### `plugin_config_uri`<sup>Optional</sup> <a name="plugin_config_uri" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.pluginConfigUri"></a>

```python
plugin_config_uri: str
```

- *Type:* str

URI of the plugin configuration stored in the Artifact Registry.

The configuration is provided to the plugin at runtime through the ON_CONFIGURE callback.
The container image must contain only a single file with the name plugin.config.
When a new WasmPluginVersion resource is created, the digest of the container image is saved in the pluginConfigDigest field.
Conflics with pluginConfigData.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_wasm_plugin#plugin_config_uri NetworkServicesWasmPlugin#plugin_config_uri}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesWasmPluginLogConfigOutputReference <a name="NetworkServicesWasmPluginLogConfigOutputReference" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_services_wasm_plugin

networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resetEnable">reset_enable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resetMinLogLevel">reset_min_log_level</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resetSampleRate">reset_sample_rate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable` <a name="reset_enable" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resetEnable"></a>

```python
def reset_enable() -> None
```

##### `reset_min_log_level` <a name="reset_min_log_level" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resetMinLogLevel"></a>

```python
def reset_min_log_level() -> None
```

##### `reset_sample_rate` <a name="reset_sample_rate" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resetSampleRate"></a>

```python
def reset_sample_rate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.enableInput">enable_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.minLogLevelInput">min_log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.sampleRateInput">sample_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.enable">enable</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.minLogLevel">min_log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.sampleRate">sample_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig">NetworkServicesWasmPluginLogConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.enableInput"></a>

```python
enable_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `min_log_level_input`<sup>Optional</sup> <a name="min_log_level_input" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.minLogLevelInput"></a>

```python
min_log_level_input: str
```

- *Type:* str

---

##### `sample_rate_input`<sup>Optional</sup> <a name="sample_rate_input" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.sampleRateInput"></a>

```python
sample_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.enable"></a>

```python
enable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `min_log_level`<sup>Required</sup> <a name="min_log_level" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.minLogLevel"></a>

```python
min_log_level: str
```

- *Type:* str

---

##### `sample_rate`<sup>Required</sup> <a name="sample_rate" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.sampleRate"></a>

```python
sample_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesWasmPluginLogConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig">NetworkServicesWasmPluginLogConfig</a>

---


### NetworkServicesWasmPluginTimeoutsOutputReference <a name="NetworkServicesWasmPluginTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_services_wasm_plugin

networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts">NetworkServicesWasmPluginTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkServicesWasmPluginTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts">NetworkServicesWasmPluginTimeouts</a>

---


### NetworkServicesWasmPluginUsedByList <a name="NetworkServicesWasmPluginUsedByList" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.Initializer"></a>

```python
from cdktn_provider_google import network_services_wasm_plugin

networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkServicesWasmPluginUsedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### NetworkServicesWasmPluginUsedByOutputReference <a name="NetworkServicesWasmPluginUsedByOutputReference" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_services_wasm_plugin

networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedBy">NetworkServicesWasmPluginUsedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesWasmPluginUsedBy
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedBy">NetworkServicesWasmPluginUsedBy</a>

---


### NetworkServicesWasmPluginVersionsList <a name="NetworkServicesWasmPluginVersionsList" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.Initializer"></a>

```python
from cdktn_provider_google import network_services_wasm_plugin

networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkServicesWasmPluginVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkServicesWasmPluginVersions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>]

---


### NetworkServicesWasmPluginVersionsOutputReference <a name="NetworkServicesWasmPluginVersionsOutputReference" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_services_wasm_plugin

networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetImageUri">reset_image_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetPluginConfigData">reset_plugin_config_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetPluginConfigUri">reset_plugin_config_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_image_uri` <a name="reset_image_uri" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetImageUri"></a>

```python
def reset_image_uri() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_plugin_config_data` <a name="reset_plugin_config_data" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetPluginConfigData"></a>

```python
def reset_plugin_config_data() -> None
```

##### `reset_plugin_config_uri` <a name="reset_plugin_config_uri" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetPluginConfigUri"></a>

```python
def reset_plugin_config_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.imageDigest">image_digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigDigest">plugin_config_digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.imageUriInput">image_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigDataInput">plugin_config_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigUriInput">plugin_config_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.versionNameInput">version_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.imageUri">image_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigData">plugin_config_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigUri">plugin_config_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.versionName">version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `image_digest`<sup>Required</sup> <a name="image_digest" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.imageDigest"></a>

```python
image_digest: str
```

- *Type:* str

---

##### `plugin_config_digest`<sup>Required</sup> <a name="plugin_config_digest" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigDigest"></a>

```python
plugin_config_digest: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `image_uri_input`<sup>Optional</sup> <a name="image_uri_input" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.imageUriInput"></a>

```python
image_uri_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `plugin_config_data_input`<sup>Optional</sup> <a name="plugin_config_data_input" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigDataInput"></a>

```python
plugin_config_data_input: str
```

- *Type:* str

---

##### `plugin_config_uri_input`<sup>Optional</sup> <a name="plugin_config_uri_input" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigUriInput"></a>

```python
plugin_config_uri_input: str
```

- *Type:* str

---

##### `version_name_input`<sup>Optional</sup> <a name="version_name_input" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.versionNameInput"></a>

```python
version_name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `plugin_config_data`<sup>Required</sup> <a name="plugin_config_data" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigData"></a>

```python
plugin_config_data: str
```

- *Type:* str

---

##### `plugin_config_uri`<sup>Required</sup> <a name="plugin_config_uri" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigUri"></a>

```python
plugin_config_uri: str
```

- *Type:* str

---

##### `version_name`<sup>Required</sup> <a name="version_name" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.versionName"></a>

```python
version_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkServicesWasmPluginVersions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>

---



