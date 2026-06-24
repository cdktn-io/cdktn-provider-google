# `firebaseRemoteConfigRemoteConfig` Submodule <a name="`firebaseRemoteConfigRemoteConfig` Submodule" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirebaseRemoteConfigRemoteConfig <a name="FirebaseRemoteConfigRemoteConfig" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config google_firebase_remote_config_remote_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  conditions: IResolvable | typing.List[FirebaseRemoteConfigRemoteConfigConditions] = None,
  id: str = None,
  parameter_groups: IResolvable | typing.List[FirebaseRemoteConfigRemoteConfigParameterGroups] = None,
  parameters: IResolvable | typing.List[FirebaseRemoteConfigRemoteConfigParameters] = None,
  project: str = None,
  timeouts: FirebaseRemoteConfigRemoteConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.conditions">conditions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions">FirebaseRemoteConfigRemoteConfigConditions</a>]</code> | conditions block. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#id FirebaseRemoteConfigRemoteConfig#id}. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.parameterGroups">parameter_groups</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups">FirebaseRemoteConfigRemoteConfigParameterGroups</a>]</code> | parameter_groups block. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters">FirebaseRemoteConfigRemoteConfigParameters</a>]</code> | parameters block. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#project FirebaseRemoteConfigRemoteConfig#project}. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts">FirebaseRemoteConfigRemoteConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.conditions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions">FirebaseRemoteConfigRemoteConfigConditions</a>]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#conditions FirebaseRemoteConfigRemoteConfig#conditions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#id FirebaseRemoteConfigRemoteConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameter_groups`<sup>Optional</sup> <a name="parameter_groups" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.parameterGroups"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups">FirebaseRemoteConfigRemoteConfigParameterGroups</a>]

parameter_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#parameter_groups FirebaseRemoteConfigRemoteConfig#parameter_groups}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.parameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters">FirebaseRemoteConfigRemoteConfigParameters</a>]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#parameters FirebaseRemoteConfigRemoteConfig#parameters}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#project FirebaseRemoteConfigRemoteConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts">FirebaseRemoteConfigRemoteConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#timeouts FirebaseRemoteConfigRemoteConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putConditions">put_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putParameterGroups">put_parameter_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetConditions">reset_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetParameterGroups">reset_parameter_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_conditions` <a name="put_conditions" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putConditions"></a>

```python
def put_conditions(
  value: IResolvable | typing.List[FirebaseRemoteConfigRemoteConfigConditions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions">FirebaseRemoteConfigRemoteConfigConditions</a>]

---

##### `put_parameter_groups` <a name="put_parameter_groups" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putParameterGroups"></a>

```python
def put_parameter_groups(
  value: IResolvable | typing.List[FirebaseRemoteConfigRemoteConfigParameterGroups]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putParameterGroups.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups">FirebaseRemoteConfigRemoteConfigParameterGroups</a>]

---

##### `put_parameters` <a name="put_parameters" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putParameters"></a>

```python
def put_parameters(
  value: IResolvable | typing.List[FirebaseRemoteConfigRemoteConfigParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters">FirebaseRemoteConfigRemoteConfigParameters</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#create FirebaseRemoteConfigRemoteConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#delete FirebaseRemoteConfigRemoteConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#update FirebaseRemoteConfigRemoteConfig#update}.

---

##### `reset_conditions` <a name="reset_conditions" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetConditions"></a>

```python
def reset_conditions() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parameter_groups` <a name="reset_parameter_groups" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetParameterGroups"></a>

```python
def reset_parameter_groups() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a FirebaseRemoteConfigRemoteConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.isConstruct"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.isTerraformElement"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.isTerraformResource"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.generateConfigForImport"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a FirebaseRemoteConfigRemoteConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FirebaseRemoteConfigRemoteConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FirebaseRemoteConfigRemoteConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FirebaseRemoteConfigRemoteConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList">FirebaseRemoteConfigRemoteConfigConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.parameterGroups">parameter_groups</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList">FirebaseRemoteConfigRemoteConfigParameterGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList">FirebaseRemoteConfigRemoteConfigParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference">FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.version">version</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList">FirebaseRemoteConfigRemoteConfigVersionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.conditionsInput">conditions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions">FirebaseRemoteConfigRemoteConfigConditions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.parameterGroupsInput">parameter_groups_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups">FirebaseRemoteConfigRemoteConfigParameterGroups</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.parametersInput">parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters">FirebaseRemoteConfigRemoteConfigParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts">FirebaseRemoteConfigRemoteConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.conditions"></a>

```python
conditions: FirebaseRemoteConfigRemoteConfigConditionsList
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList">FirebaseRemoteConfigRemoteConfigConditionsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameter_groups`<sup>Required</sup> <a name="parameter_groups" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.parameterGroups"></a>

```python
parameter_groups: FirebaseRemoteConfigRemoteConfigParameterGroupsList
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList">FirebaseRemoteConfigRemoteConfigParameterGroupsList</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.parameters"></a>

```python
parameters: FirebaseRemoteConfigRemoteConfigParametersList
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList">FirebaseRemoteConfigRemoteConfigParametersList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.timeouts"></a>

```python
timeouts: FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference">FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.version"></a>

```python
version: FirebaseRemoteConfigRemoteConfigVersionList
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList">FirebaseRemoteConfigRemoteConfigVersionList</a>

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.conditionsInput"></a>

```python
conditions_input: IResolvable | typing.List[FirebaseRemoteConfigRemoteConfigConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions">FirebaseRemoteConfigRemoteConfigConditions</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parameter_groups_input`<sup>Optional</sup> <a name="parameter_groups_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.parameterGroupsInput"></a>

```python
parameter_groups_input: IResolvable | typing.List[FirebaseRemoteConfigRemoteConfigParameterGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups">FirebaseRemoteConfigRemoteConfigParameterGroups</a>]

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.parametersInput"></a>

```python
parameters_input: IResolvable | typing.List[FirebaseRemoteConfigRemoteConfigParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters">FirebaseRemoteConfigRemoteConfigParameters</a>]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | FirebaseRemoteConfigRemoteConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts">FirebaseRemoteConfigRemoteConfigTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FirebaseRemoteConfigRemoteConfigConditions <a name="FirebaseRemoteConfigRemoteConfigConditions" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions.Initializer"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions(
  expression: str,
  name: str,
  tag_color: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions.property.expression">expression</a></code> | <code>str</code> | The logic of this condition. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions.property.name">name</a></code> | <code>str</code> | A non-empty and unique name of this condition. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions.property.tagColor">tag_color</a></code> | <code>str</code> | The color associated with this condition for display purposes in the Firebase Console. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions.property.expression"></a>

```python
expression: str
```

- *Type:* str

The logic of this condition.

See the documentation regarding
[Condition
Expressions](https://firebase.google.com/docs/remote-config/condition-reference)
for the expected syntax of this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#expression FirebaseRemoteConfigRemoteConfig#expression}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions.property.name"></a>

```python
name: str
```

- *Type:* str

A non-empty and unique name of this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#name FirebaseRemoteConfigRemoteConfig#name}

---

##### `tag_color`<sup>Optional</sup> <a name="tag_color" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions.property.tagColor"></a>

```python
tag_color: str
```

- *Type:* str

The color associated with this condition for display purposes in the Firebase Console.

Not specifying this value results in the Console picking an arbitrary color to associate with the condition. Possible values: ["BLUE", "BROWN", "CYAN", "DEEP_ORANGE", "GREEN", "INDIGO", "LIME", "ORANGE", "PINK", "PURPLE", "TEAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#tag_color FirebaseRemoteConfigRemoteConfig#tag_color}

---

### FirebaseRemoteConfigRemoteConfigConfig <a name="FirebaseRemoteConfigRemoteConfigConfig" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.Initializer"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  conditions: IResolvable | typing.List[FirebaseRemoteConfigRemoteConfigConditions] = None,
  id: str = None,
  parameter_groups: IResolvable | typing.List[FirebaseRemoteConfigRemoteConfigParameterGroups] = None,
  parameters: IResolvable | typing.List[FirebaseRemoteConfigRemoteConfigParameters] = None,
  project: str = None,
  timeouts: FirebaseRemoteConfigRemoteConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.conditions">conditions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions">FirebaseRemoteConfigRemoteConfigConditions</a>]</code> | conditions block. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#id FirebaseRemoteConfigRemoteConfig#id}. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.parameterGroups">parameter_groups</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups">FirebaseRemoteConfigRemoteConfigParameterGroups</a>]</code> | parameter_groups block. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters">FirebaseRemoteConfigRemoteConfigParameters</a>]</code> | parameters block. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#project FirebaseRemoteConfigRemoteConfig#project}. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts">FirebaseRemoteConfigRemoteConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.conditions"></a>

```python
conditions: IResolvable | typing.List[FirebaseRemoteConfigRemoteConfigConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions">FirebaseRemoteConfigRemoteConfigConditions</a>]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#conditions FirebaseRemoteConfigRemoteConfig#conditions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#id FirebaseRemoteConfigRemoteConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameter_groups`<sup>Optional</sup> <a name="parameter_groups" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.parameterGroups"></a>

```python
parameter_groups: IResolvable | typing.List[FirebaseRemoteConfigRemoteConfigParameterGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups">FirebaseRemoteConfigRemoteConfigParameterGroups</a>]

parameter_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#parameter_groups FirebaseRemoteConfigRemoteConfig#parameter_groups}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.parameters"></a>

```python
parameters: IResolvable | typing.List[FirebaseRemoteConfigRemoteConfigParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters">FirebaseRemoteConfigRemoteConfigParameters</a>]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#parameters FirebaseRemoteConfigRemoteConfig#parameters}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#project FirebaseRemoteConfigRemoteConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.timeouts"></a>

```python
timeouts: FirebaseRemoteConfigRemoteConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts">FirebaseRemoteConfigRemoteConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#timeouts FirebaseRemoteConfigRemoteConfig#timeouts}

---

### FirebaseRemoteConfigRemoteConfigParameterGroups <a name="FirebaseRemoteConfigRemoteConfigParameterGroups" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups.Initializer"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups(
  parameter_group_name: str,
  description: str = None,
  parameters: IResolvable | typing.List[FirebaseRemoteConfigRemoteConfigParameterGroupsParameters] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups.property.parameterGroupName">parameter_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#parameter_group_name FirebaseRemoteConfigRemoteConfig#parameter_group_name}. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups.property.description">description</a></code> | <code>str</code> | A description for the group. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters">FirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>]</code> | parameters block. |

---

##### `parameter_group_name`<sup>Required</sup> <a name="parameter_group_name" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups.property.parameterGroupName"></a>

```python
parameter_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#parameter_group_name FirebaseRemoteConfigRemoteConfig#parameter_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups.property.description"></a>

```python
description: str
```

- *Type:* str

A description for the group.

Its length must be less than or equal to 256
characters. A description may contain any Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#description FirebaseRemoteConfigRemoteConfig#description}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups.property.parameters"></a>

```python
parameters: IResolvable | typing.List[FirebaseRemoteConfigRemoteConfigParameterGroupsParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters">FirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#parameters FirebaseRemoteConfigRemoteConfig#parameters}

---

### FirebaseRemoteConfigRemoteConfigParameterGroupsParameters <a name="FirebaseRemoteConfigRemoteConfigParameterGroupsParameters" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters.Initializer"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters(
  parameter_name: str,
  conditional_values: IResolvable | typing.List[FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues] = None,
  default_value: FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue = None,
  description: str = None,
  value_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.parameterName">parameter_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#parameter_name FirebaseRemoteConfigRemoteConfig#parameter_name}. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.conditionalValues">conditional_values</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>]</code> | conditional_values block. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.defaultValue">default_value</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a></code> | default_value block. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.description">description</a></code> | <code>str</code> | A description for this Parameter. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.valueType">value_type</a></code> | <code>str</code> | The data type for all values of this parameter in the current version of the template. |

---

##### `parameter_name`<sup>Required</sup> <a name="parameter_name" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#parameter_name FirebaseRemoteConfigRemoteConfig#parameter_name}.

---

##### `conditional_values`<sup>Optional</sup> <a name="conditional_values" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.conditionalValues"></a>

```python
conditional_values: IResolvable | typing.List[FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>]

conditional_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#conditional_values FirebaseRemoteConfigRemoteConfig#conditional_values}

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.defaultValue"></a>

```python
default_value: FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a>

default_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#default_value FirebaseRemoteConfigRemoteConfig#default_value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.description"></a>

```python
description: str
```

- *Type:* str

A description for this Parameter.

Its length must be less than or equal to
256 characters . A description may contain any Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#description FirebaseRemoteConfigRemoteConfig#description}

---

##### `value_type`<sup>Optional</sup> <a name="value_type" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

The data type for all values of this parameter in the current version of the template.

Default value: "STRING" Possible values: ["STRING", "BOOLEAN", "NUMBER", "JSON"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#value_type FirebaseRemoteConfigRemoteConfig#value_type}

---

### FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues <a name="FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.Initializer"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues(
  condition_name: str,
  use_in_app_default: bool | IResolvable = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.conditionName">condition_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#condition_name FirebaseRemoteConfigRemoteConfig#condition_name}. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.useInAppDefault">use_in_app_default</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, the parameter is omitted from the parameter values returned to a client. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.value">value</a></code> | <code>str</code> | The string value that the parameter is set to. |

---

##### `condition_name`<sup>Required</sup> <a name="condition_name" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.conditionName"></a>

```python
condition_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#condition_name FirebaseRemoteConfigRemoteConfig#condition_name}.

---

##### `use_in_app_default`<sup>Optional</sup> <a name="use_in_app_default" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.useInAppDefault"></a>

```python
use_in_app_default: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, the parameter is omitted from the parameter values returned to a client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#use_in_app_default FirebaseRemoteConfigRemoteConfig#use_in_app_default}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.value"></a>

```python
value: str
```

- *Type:* str

The string value that the parameter is set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#value FirebaseRemoteConfigRemoteConfig#value}

---

### FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue <a name="FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.Initializer"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue(
  use_in_app_default: bool | IResolvable = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.property.useInAppDefault">use_in_app_default</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, the parameter is omitted from the parameter values returned to a client. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.property.value">value</a></code> | <code>str</code> | The string value that the parameter is set to. |

---

##### `use_in_app_default`<sup>Optional</sup> <a name="use_in_app_default" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.property.useInAppDefault"></a>

```python
use_in_app_default: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, the parameter is omitted from the parameter values returned to a client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#use_in_app_default FirebaseRemoteConfigRemoteConfig#use_in_app_default}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.property.value"></a>

```python
value: str
```

- *Type:* str

The string value that the parameter is set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#value FirebaseRemoteConfigRemoteConfig#value}

---

### FirebaseRemoteConfigRemoteConfigParameters <a name="FirebaseRemoteConfigRemoteConfigParameters" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters.Initializer"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters(
  parameter_name: str,
  conditional_values: IResolvable | typing.List[FirebaseRemoteConfigRemoteConfigParametersConditionalValues] = None,
  default_value: FirebaseRemoteConfigRemoteConfigParametersDefaultValue = None,
  description: str = None,
  value_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters.property.parameterName">parameter_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#parameter_name FirebaseRemoteConfigRemoteConfig#parameter_name}. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters.property.conditionalValues">conditional_values</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>]</code> | conditional_values block. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters.property.defaultValue">default_value</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParametersDefaultValue</a></code> | default_value block. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters.property.description">description</a></code> | <code>str</code> | A description for this Parameter. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters.property.valueType">value_type</a></code> | <code>str</code> | The data type for all values of this parameter in the current version of the template. |

---

##### `parameter_name`<sup>Required</sup> <a name="parameter_name" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#parameter_name FirebaseRemoteConfigRemoteConfig#parameter_name}.

---

##### `conditional_values`<sup>Optional</sup> <a name="conditional_values" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters.property.conditionalValues"></a>

```python
conditional_values: IResolvable | typing.List[FirebaseRemoteConfigRemoteConfigParametersConditionalValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>]

conditional_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#conditional_values FirebaseRemoteConfigRemoteConfig#conditional_values}

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters.property.defaultValue"></a>

```python
default_value: FirebaseRemoteConfigRemoteConfigParametersDefaultValue
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParametersDefaultValue</a>

default_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#default_value FirebaseRemoteConfigRemoteConfig#default_value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters.property.description"></a>

```python
description: str
```

- *Type:* str

A description for this Parameter.

Its length must be less than or equal to
256 characters . A description may contain any Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#description FirebaseRemoteConfigRemoteConfig#description}

---

##### `value_type`<sup>Optional</sup> <a name="value_type" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

The data type for all values of this parameter in the current version of the template.

Default value: "STRING" Possible values: ["STRING", "BOOLEAN", "NUMBER", "JSON"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#value_type FirebaseRemoteConfigRemoteConfig#value_type}

---

### FirebaseRemoteConfigRemoteConfigParametersConditionalValues <a name="FirebaseRemoteConfigRemoteConfigParametersConditionalValues" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues.Initializer"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues(
  condition_name: str,
  use_in_app_default: bool | IResolvable = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.conditionName">condition_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#condition_name FirebaseRemoteConfigRemoteConfig#condition_name}. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.useInAppDefault">use_in_app_default</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, the parameter is omitted from the parameter values returned to a client. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.value">value</a></code> | <code>str</code> | The string value that the parameter is set to. |

---

##### `condition_name`<sup>Required</sup> <a name="condition_name" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.conditionName"></a>

```python
condition_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#condition_name FirebaseRemoteConfigRemoteConfig#condition_name}.

---

##### `use_in_app_default`<sup>Optional</sup> <a name="use_in_app_default" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.useInAppDefault"></a>

```python
use_in_app_default: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, the parameter is omitted from the parameter values returned to a client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#use_in_app_default FirebaseRemoteConfigRemoteConfig#use_in_app_default}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.value"></a>

```python
value: str
```

- *Type:* str

The string value that the parameter is set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#value FirebaseRemoteConfigRemoteConfig#value}

---

### FirebaseRemoteConfigRemoteConfigParametersDefaultValue <a name="FirebaseRemoteConfigRemoteConfigParametersDefaultValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue.Initializer"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue(
  use_in_app_default: bool | IResolvable = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue.property.useInAppDefault">use_in_app_default</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, the parameter is omitted from the parameter values returned to a client. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue.property.value">value</a></code> | <code>str</code> | The string value that the parameter is set to. |

---

##### `use_in_app_default`<sup>Optional</sup> <a name="use_in_app_default" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue.property.useInAppDefault"></a>

```python
use_in_app_default: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, the parameter is omitted from the parameter values returned to a client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#use_in_app_default FirebaseRemoteConfigRemoteConfig#use_in_app_default}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue.property.value"></a>

```python
value: str
```

- *Type:* str

The string value that the parameter is set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#value FirebaseRemoteConfigRemoteConfig#value}

---

### FirebaseRemoteConfigRemoteConfigTimeouts <a name="FirebaseRemoteConfigRemoteConfigTimeouts" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts.Initializer"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#create FirebaseRemoteConfigRemoteConfig#create}. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#delete FirebaseRemoteConfigRemoteConfig#delete}. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#update FirebaseRemoteConfigRemoteConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#create FirebaseRemoteConfigRemoteConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#delete FirebaseRemoteConfigRemoteConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#update FirebaseRemoteConfigRemoteConfig#update}.

---

### FirebaseRemoteConfigRemoteConfigVersion <a name="FirebaseRemoteConfigRemoteConfigVersion" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersion.Initializer"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersion()
```


### FirebaseRemoteConfigRemoteConfigVersionUpdateUser <a name="FirebaseRemoteConfigRemoteConfigVersionUpdateUser" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUser.Initializer"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUser()
```


## Classes <a name="Classes" id="Classes"></a>

### FirebaseRemoteConfigRemoteConfigConditionsList <a name="FirebaseRemoteConfigRemoteConfigConditionsList" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.Initializer"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FirebaseRemoteConfigRemoteConfigConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions">FirebaseRemoteConfigRemoteConfigConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FirebaseRemoteConfigRemoteConfigConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions">FirebaseRemoteConfigRemoteConfigConditions</a>]

---


### FirebaseRemoteConfigRemoteConfigConditionsOutputReference <a name="FirebaseRemoteConfigRemoteConfigConditionsOutputReference" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.resetTagColor">reset_tag_color</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tag_color` <a name="reset_tag_color" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.resetTagColor"></a>

```python
def reset_tag_color() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.tagColorInput">tag_color_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.tagColor">tag_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions">FirebaseRemoteConfigRemoteConfigConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tag_color_input`<sup>Optional</sup> <a name="tag_color_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.tagColorInput"></a>

```python
tag_color_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tag_color`<sup>Required</sup> <a name="tag_color" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.tagColor"></a>

```python
tag_color: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FirebaseRemoteConfigRemoteConfigConditions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions">FirebaseRemoteConfigRemoteConfigConditions</a>

---


### FirebaseRemoteConfigRemoteConfigParameterGroupsList <a name="FirebaseRemoteConfigRemoteConfigParameterGroupsList" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups">FirebaseRemoteConfigRemoteConfigParameterGroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FirebaseRemoteConfigRemoteConfigParameterGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups">FirebaseRemoteConfigRemoteConfigParameterGroups</a>]

---


### FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference <a name="FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameters` <a name="put_parameters" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.putParameters"></a>

```python
def put_parameters(
  value: IResolvable | typing.List[FirebaseRemoteConfigRemoteConfigParameterGroupsParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters">FirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameterGroupNameInput">parameter_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parametersInput">parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters">FirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameterGroupName">parameter_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups">FirebaseRemoteConfigRemoteConfigParameterGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameters"></a>

```python
parameters: FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `parameter_group_name_input`<sup>Optional</sup> <a name="parameter_group_name_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameterGroupNameInput"></a>

```python
parameter_group_name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parametersInput"></a>

```python
parameters_input: IResolvable | typing.List[FirebaseRemoteConfigRemoteConfigParameterGroupsParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters">FirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `parameter_group_name`<sup>Required</sup> <a name="parameter_group_name" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameterGroupName"></a>

```python
parameter_group_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FirebaseRemoteConfigRemoteConfigParameterGroups
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups">FirebaseRemoteConfigRemoteConfigParameterGroups</a>

---


### FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList <a name="FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>]

---


### FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference <a name="FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resetUseInAppDefault">reset_use_in_app_default</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_use_in_app_default` <a name="reset_use_in_app_default" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resetUseInAppDefault"></a>

```python
def reset_use_in_app_default() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.conditionNameInput">condition_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.useInAppDefaultInput">use_in_app_default_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.conditionName">condition_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.useInAppDefault">use_in_app_default</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_name_input`<sup>Optional</sup> <a name="condition_name_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.conditionNameInput"></a>

```python
condition_name_input: str
```

- *Type:* str

---

##### `use_in_app_default_input`<sup>Optional</sup> <a name="use_in_app_default_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.useInAppDefaultInput"></a>

```python
use_in_app_default_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `condition_name`<sup>Required</sup> <a name="condition_name" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.conditionName"></a>

```python
condition_name: str
```

- *Type:* str

---

##### `use_in_app_default`<sup>Required</sup> <a name="use_in_app_default" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.useInAppDefault"></a>

```python
use_in_app_default: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>

---


### FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference <a name="FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resetUseInAppDefault">reset_use_in_app_default</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_use_in_app_default` <a name="reset_use_in_app_default" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resetUseInAppDefault"></a>

```python
def reset_use_in_app_default() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.useInAppDefaultInput">use_in_app_default_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.useInAppDefault">use_in_app_default</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `use_in_app_default_input`<sup>Optional</sup> <a name="use_in_app_default_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.useInAppDefaultInput"></a>

```python
use_in_app_default_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `use_in_app_default`<sup>Required</sup> <a name="use_in_app_default" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.useInAppDefault"></a>

```python
use_in_app_default: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.internalValue"></a>

```python
internal_value: FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a>

---


### FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList <a name="FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters">FirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FirebaseRemoteConfigRemoteConfigParameterGroupsParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters">FirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>]

---


### FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference <a name="FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putConditionalValues">put_conditional_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putDefaultValue">put_default_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetConditionalValues">reset_conditional_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetDefaultValue">reset_default_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetValueType">reset_value_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_conditional_values` <a name="put_conditional_values" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putConditionalValues"></a>

```python
def put_conditional_values(
  value: IResolvable | typing.List[FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putConditionalValues.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>]

---

##### `put_default_value` <a name="put_default_value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putDefaultValue"></a>

```python
def put_default_value(
  use_in_app_default: bool | IResolvable = None,
  value: str = None
) -> None
```

###### `use_in_app_default`<sup>Optional</sup> <a name="use_in_app_default" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putDefaultValue.parameter.useInAppDefault"></a>

- *Type:* bool | cdktn.IResolvable

If true, the parameter is omitted from the parameter values returned to a client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#use_in_app_default FirebaseRemoteConfigRemoteConfig#use_in_app_default}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putDefaultValue.parameter.value"></a>

- *Type:* str

The string value that the parameter is set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#value FirebaseRemoteConfigRemoteConfig#value}

---

##### `reset_conditional_values` <a name="reset_conditional_values" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetConditionalValues"></a>

```python
def reset_conditional_values() -> None
```

##### `reset_default_value` <a name="reset_default_value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetDefaultValue"></a>

```python
def reset_default_value() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_value_type` <a name="reset_value_type" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetValueType"></a>

```python
def reset_value_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.conditionalValues">conditional_values</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.defaultValue">default_value</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.conditionalValuesInput">conditional_values_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.defaultValueInput">default_value_input</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.parameterNameInput">parameter_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.valueTypeInput">value_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.parameterName">parameter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters">FirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditional_values`<sup>Required</sup> <a name="conditional_values" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.conditionalValues"></a>

```python
conditional_values: FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList</a>

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.defaultValue"></a>

```python
default_value: FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference</a>

---

##### `conditional_values_input`<sup>Optional</sup> <a name="conditional_values_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.conditionalValuesInput"></a>

```python
conditional_values_input: IResolvable | typing.List[FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>]

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.defaultValueInput"></a>

```python
default_value_input: FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `parameter_name_input`<sup>Optional</sup> <a name="parameter_name_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.parameterNameInput"></a>

```python
parameter_name_input: str
```

- *Type:* str

---

##### `value_type_input`<sup>Optional</sup> <a name="value_type_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.valueTypeInput"></a>

```python
value_type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `parameter_name`<sup>Required</sup> <a name="parameter_name" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FirebaseRemoteConfigRemoteConfigParameterGroupsParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters">FirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>

---


### FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList <a name="FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FirebaseRemoteConfigRemoteConfigParametersConditionalValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>]

---


### FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference <a name="FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resetUseInAppDefault">reset_use_in_app_default</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_use_in_app_default` <a name="reset_use_in_app_default" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resetUseInAppDefault"></a>

```python
def reset_use_in_app_default() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.conditionNameInput">condition_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.useInAppDefaultInput">use_in_app_default_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.conditionName">condition_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.useInAppDefault">use_in_app_default</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParametersConditionalValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_name_input`<sup>Optional</sup> <a name="condition_name_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.conditionNameInput"></a>

```python
condition_name_input: str
```

- *Type:* str

---

##### `use_in_app_default_input`<sup>Optional</sup> <a name="use_in_app_default_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.useInAppDefaultInput"></a>

```python
use_in_app_default_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `condition_name`<sup>Required</sup> <a name="condition_name" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.conditionName"></a>

```python
condition_name: str
```

- *Type:* str

---

##### `use_in_app_default`<sup>Required</sup> <a name="use_in_app_default" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.useInAppDefault"></a>

```python
use_in_app_default: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FirebaseRemoteConfigRemoteConfigParametersConditionalValues
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>

---


### FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference <a name="FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resetUseInAppDefault">reset_use_in_app_default</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_use_in_app_default` <a name="reset_use_in_app_default" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resetUseInAppDefault"></a>

```python
def reset_use_in_app_default() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.useInAppDefaultInput">use_in_app_default_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.useInAppDefault">use_in_app_default</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParametersDefaultValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `use_in_app_default_input`<sup>Optional</sup> <a name="use_in_app_default_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.useInAppDefaultInput"></a>

```python
use_in_app_default_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `use_in_app_default`<sup>Required</sup> <a name="use_in_app_default" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.useInAppDefault"></a>

```python
use_in_app_default: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.internalValue"></a>

```python
internal_value: FirebaseRemoteConfigRemoteConfigParametersDefaultValue
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParametersDefaultValue</a>

---


### FirebaseRemoteConfigRemoteConfigParametersList <a name="FirebaseRemoteConfigRemoteConfigParametersList" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.Initializer"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FirebaseRemoteConfigRemoteConfigParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters">FirebaseRemoteConfigRemoteConfigParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FirebaseRemoteConfigRemoteConfigParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters">FirebaseRemoteConfigRemoteConfigParameters</a>]

---


### FirebaseRemoteConfigRemoteConfigParametersOutputReference <a name="FirebaseRemoteConfigRemoteConfigParametersOutputReference" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.putConditionalValues">put_conditional_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.putDefaultValue">put_default_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.resetConditionalValues">reset_conditional_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.resetDefaultValue">reset_default_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.resetValueType">reset_value_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_conditional_values` <a name="put_conditional_values" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.putConditionalValues"></a>

```python
def put_conditional_values(
  value: IResolvable | typing.List[FirebaseRemoteConfigRemoteConfigParametersConditionalValues]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.putConditionalValues.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>]

---

##### `put_default_value` <a name="put_default_value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.putDefaultValue"></a>

```python
def put_default_value(
  use_in_app_default: bool | IResolvable = None,
  value: str = None
) -> None
```

###### `use_in_app_default`<sup>Optional</sup> <a name="use_in_app_default" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.putDefaultValue.parameter.useInAppDefault"></a>

- *Type:* bool | cdktn.IResolvable

If true, the parameter is omitted from the parameter values returned to a client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#use_in_app_default FirebaseRemoteConfigRemoteConfig#use_in_app_default}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.putDefaultValue.parameter.value"></a>

- *Type:* str

The string value that the parameter is set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/firebase_remote_config_remote_config#value FirebaseRemoteConfigRemoteConfig#value}

---

##### `reset_conditional_values` <a name="reset_conditional_values" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.resetConditionalValues"></a>

```python
def reset_conditional_values() -> None
```

##### `reset_default_value` <a name="reset_default_value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.resetDefaultValue"></a>

```python
def reset_default_value() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_value_type` <a name="reset_value_type" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.resetValueType"></a>

```python
def reset_value_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.conditionalValues">conditional_values</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList">FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.defaultValue">default_value</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference">FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.conditionalValuesInput">conditional_values_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.defaultValueInput">default_value_input</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParametersDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.parameterNameInput">parameter_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.valueTypeInput">value_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.parameterName">parameter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters">FirebaseRemoteConfigRemoteConfigParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditional_values`<sup>Required</sup> <a name="conditional_values" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.conditionalValues"></a>

```python
conditional_values: FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList">FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList</a>

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.defaultValue"></a>

```python
default_value: FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference">FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference</a>

---

##### `conditional_values_input`<sup>Optional</sup> <a name="conditional_values_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.conditionalValuesInput"></a>

```python
conditional_values_input: IResolvable | typing.List[FirebaseRemoteConfigRemoteConfigParametersConditionalValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues">FirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>]

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.defaultValueInput"></a>

```python
default_value_input: FirebaseRemoteConfigRemoteConfigParametersDefaultValue
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParametersDefaultValue</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `parameter_name_input`<sup>Optional</sup> <a name="parameter_name_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.parameterNameInput"></a>

```python
parameter_name_input: str
```

- *Type:* str

---

##### `value_type_input`<sup>Optional</sup> <a name="value_type_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.valueTypeInput"></a>

```python
value_type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `parameter_name`<sup>Required</sup> <a name="parameter_name" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FirebaseRemoteConfigRemoteConfigParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters">FirebaseRemoteConfigRemoteConfigParameters</a>

---


### FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference <a name="FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts">FirebaseRemoteConfigRemoteConfigTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FirebaseRemoteConfigRemoteConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts">FirebaseRemoteConfigRemoteConfigTimeouts</a>

---


### FirebaseRemoteConfigRemoteConfigVersionList <a name="FirebaseRemoteConfigRemoteConfigVersionList" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.Initializer"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FirebaseRemoteConfigRemoteConfigVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FirebaseRemoteConfigRemoteConfigVersionOutputReference <a name="FirebaseRemoteConfigRemoteConfigVersionOutputReference" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.isLegacy">is_legacy</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.rollbackSource">rollback_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateOrigin">update_origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateType">update_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateUser">update_user</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList">FirebaseRemoteConfigRemoteConfigVersionUpdateUserList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.versionNumber">version_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersion">FirebaseRemoteConfigRemoteConfigVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_legacy`<sup>Required</sup> <a name="is_legacy" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.isLegacy"></a>

```python
is_legacy: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `rollback_source`<sup>Required</sup> <a name="rollback_source" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.rollbackSource"></a>

```python
rollback_source: str
```

- *Type:* str

---

##### `update_origin`<sup>Required</sup> <a name="update_origin" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateOrigin"></a>

```python
update_origin: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `update_type`<sup>Required</sup> <a name="update_type" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateType"></a>

```python
update_type: str
```

- *Type:* str

---

##### `update_user`<sup>Required</sup> <a name="update_user" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateUser"></a>

```python
update_user: FirebaseRemoteConfigRemoteConfigVersionUpdateUserList
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList">FirebaseRemoteConfigRemoteConfigVersionUpdateUserList</a>

---

##### `version_number`<sup>Required</sup> <a name="version_number" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.versionNumber"></a>

```python
version_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.internalValue"></a>

```python
internal_value: FirebaseRemoteConfigRemoteConfigVersion
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersion">FirebaseRemoteConfigRemoteConfigVersion</a>

---


### FirebaseRemoteConfigRemoteConfigVersionUpdateUserList <a name="FirebaseRemoteConfigRemoteConfigVersionUpdateUserList" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference <a name="FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer"></a>

```python
from cdktn_provider_google import firebase_remote_config_remote_config

firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.imageUrl">image_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUser">FirebaseRemoteConfigRemoteConfigVersionUpdateUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `image_url`<sup>Required</sup> <a name="image_url" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.imageUrl"></a>

```python
image_url: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.internalValue"></a>

```python
internal_value: FirebaseRemoteConfigRemoteConfigVersionUpdateUser
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUser">FirebaseRemoteConfigRemoteConfigVersionUpdateUser</a>

---



