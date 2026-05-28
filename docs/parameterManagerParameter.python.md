# `parameterManagerParameter` Submodule <a name="`parameterManagerParameter` Submodule" id="@cdktn/provider-google.parameterManagerParameter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ParameterManagerParameter <a name="ParameterManagerParameter" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/parameter_manager_parameter google_parameter_manager_parameter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer"></a>

```python
from cdktn_provider_google import parameter_manager_parameter

parameterManagerParameter.ParameterManagerParameter(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parameter_id: str,
  deletion_policy: str = None,
  format: str = None,
  id: str = None,
  kms_key: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: ParameterManagerParameterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer.parameter.parameterId">parameter_id</a></code> | <code>str</code> | This must be unique within the project. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer.parameter.format">format</a></code> | <code>str</code> | The format type of the parameter resource. Default value: "UNFORMATTED" Possible values: ["UNFORMATTED", "YAML", "JSON"]. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/parameter_manager_parameter#id ParameterManagerParameter#id}. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer.parameter.kmsKey">kms_key</a></code> | <code>str</code> | The resource name of the Cloud KMS CryptoKey used to encrypt parameter version payload. Format 'projects/{{project}}/locations/global/keyRings/{{key_ring}}/cryptoKeys/{{crypto_key}}'. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels assigned to this Parameter. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/parameter_manager_parameter#project ParameterManagerParameter#project}. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeouts">ParameterManagerParameterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parameter_id`<sup>Required</sup> <a name="parameter_id" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer.parameter.parameterId"></a>

- *Type:* str

This must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/parameter_manager_parameter#parameter_id ParameterManagerParameter#parameter_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/parameter_manager_parameter#deletion_policy ParameterManagerParameter#deletion_policy}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer.parameter.format"></a>

- *Type:* str

The format type of the parameter resource. Default value: "UNFORMATTED" Possible values: ["UNFORMATTED", "YAML", "JSON"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/parameter_manager_parameter#format ParameterManagerParameter#format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/parameter_manager_parameter#id ParameterManagerParameter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer.parameter.kmsKey"></a>

- *Type:* str

The resource name of the Cloud KMS CryptoKey used to encrypt parameter version payload. Format 'projects/{{project}}/locations/global/keyRings/{{key_ring}}/cryptoKeys/{{crypto_key}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/parameter_manager_parameter#kms_key ParameterManagerParameter#kms_key}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels assigned to this Parameter.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be assigned to a given resource.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/parameter_manager_parameter#labels ParameterManagerParameter#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/parameter_manager_parameter#project ParameterManagerParameter#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeouts">ParameterManagerParameterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/parameter_manager_parameter#timeouts ParameterManagerParameter#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.resetFormat">reset_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.resetKmsKey">reset_kms_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/parameter_manager_parameter#create ParameterManagerParameter#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/parameter_manager_parameter#delete ParameterManagerParameter#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/parameter_manager_parameter#update ParameterManagerParameter#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_format` <a name="reset_format" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.resetFormat"></a>

```python
def reset_format() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ParameterManagerParameter resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.isConstruct"></a>

```python
from cdktn_provider_google import parameter_manager_parameter

parameterManagerParameter.ParameterManagerParameter.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.isTerraformElement"></a>

```python
from cdktn_provider_google import parameter_manager_parameter

parameterManagerParameter.ParameterManagerParameter.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.isTerraformResource"></a>

```python
from cdktn_provider_google import parameter_manager_parameter

parameterManagerParameter.ParameterManagerParameter.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.generateConfigForImport"></a>

```python
from cdktn_provider_google import parameter_manager_parameter

parameterManagerParameter.ParameterManagerParameter.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ParameterManagerParameter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ParameterManagerParameter to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ParameterManagerParameter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/parameter_manager_parameter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ParameterManagerParameter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.policyMember">policy_member</a></code> | <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberList">ParameterManagerParameterPolicyMemberList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference">ParameterManagerParameterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.parameterIdInput">parameter_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeouts">ParameterManagerParameterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.parameterId">parameter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_member`<sup>Required</sup> <a name="policy_member" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.policyMember"></a>

```python
policy_member: ParameterManagerParameterPolicyMemberList
```

- *Type:* <a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberList">ParameterManagerParameterPolicyMemberList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.timeouts"></a>

```python
timeouts: ParameterManagerParameterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference">ParameterManagerParameterTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `parameter_id_input`<sup>Optional</sup> <a name="parameter_id_input" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.parameterIdInput"></a>

```python
parameter_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ParameterManagerParameterTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeouts">ParameterManagerParameterTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `parameter_id`<sup>Required</sup> <a name="parameter_id" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.parameterId"></a>

```python
parameter_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameter.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ParameterManagerParameterConfig <a name="ParameterManagerParameterConfig" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterConfig.Initializer"></a>

```python
from cdktn_provider_google import parameter_manager_parameter

parameterManagerParameter.ParameterManagerParameterConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parameter_id: str,
  deletion_policy: str = None,
  format: str = None,
  id: str = None,
  kms_key: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: ParameterManagerParameterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterConfig.property.parameterId">parameter_id</a></code> | <code>str</code> | This must be unique within the project. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterConfig.property.format">format</a></code> | <code>str</code> | The format type of the parameter resource. Default value: "UNFORMATTED" Possible values: ["UNFORMATTED", "YAML", "JSON"]. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/parameter_manager_parameter#id ParameterManagerParameter#id}. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterConfig.property.kmsKey">kms_key</a></code> | <code>str</code> | The resource name of the Cloud KMS CryptoKey used to encrypt parameter version payload. Format 'projects/{{project}}/locations/global/keyRings/{{key_ring}}/cryptoKeys/{{crypto_key}}'. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels assigned to this Parameter. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/parameter_manager_parameter#project ParameterManagerParameter#project}. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeouts">ParameterManagerParameterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parameter_id`<sup>Required</sup> <a name="parameter_id" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterConfig.property.parameterId"></a>

```python
parameter_id: str
```

- *Type:* str

This must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/parameter_manager_parameter#parameter_id ParameterManagerParameter#parameter_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/parameter_manager_parameter#deletion_policy ParameterManagerParameter#deletion_policy}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterConfig.property.format"></a>

```python
format: str
```

- *Type:* str

The format type of the parameter resource. Default value: "UNFORMATTED" Possible values: ["UNFORMATTED", "YAML", "JSON"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/parameter_manager_parameter#format ParameterManagerParameter#format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/parameter_manager_parameter#id ParameterManagerParameter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterConfig.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

The resource name of the Cloud KMS CryptoKey used to encrypt parameter version payload. Format 'projects/{{project}}/locations/global/keyRings/{{key_ring}}/cryptoKeys/{{crypto_key}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/parameter_manager_parameter#kms_key ParameterManagerParameter#kms_key}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels assigned to this Parameter.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be assigned to a given resource.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/parameter_manager_parameter#labels ParameterManagerParameter#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/parameter_manager_parameter#project ParameterManagerParameter#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterConfig.property.timeouts"></a>

```python
timeouts: ParameterManagerParameterTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeouts">ParameterManagerParameterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/parameter_manager_parameter#timeouts ParameterManagerParameter#timeouts}

---

### ParameterManagerParameterPolicyMember <a name="ParameterManagerParameterPolicyMember" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMember"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMember.Initializer"></a>

```python
from cdktn_provider_google import parameter_manager_parameter

parameterManagerParameter.ParameterManagerParameterPolicyMember()
```


### ParameterManagerParameterTimeouts <a name="ParameterManagerParameterTimeouts" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeouts.Initializer"></a>

```python
from cdktn_provider_google import parameter_manager_parameter

parameterManagerParameter.ParameterManagerParameterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/parameter_manager_parameter#create ParameterManagerParameter#create}. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/parameter_manager_parameter#delete ParameterManagerParameter#delete}. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/parameter_manager_parameter#update ParameterManagerParameter#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/parameter_manager_parameter#create ParameterManagerParameter#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/parameter_manager_parameter#delete ParameterManagerParameter#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/parameter_manager_parameter#update ParameterManagerParameter#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ParameterManagerParameterPolicyMemberList <a name="ParameterManagerParameterPolicyMemberList" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberList.Initializer"></a>

```python
from cdktn_provider_google import parameter_manager_parameter

parameterManagerParameter.ParameterManagerParameterPolicyMemberList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ParameterManagerParameterPolicyMemberOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ParameterManagerParameterPolicyMemberOutputReference <a name="ParameterManagerParameterPolicyMemberOutputReference" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.Initializer"></a>

```python
from cdktn_provider_google import parameter_manager_parameter

parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.property.iamPolicyNamePrincipal">iam_policy_name_principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.property.iamPolicyUidPrincipal">iam_policy_uid_principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMember">ParameterManagerParameterPolicyMember</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iam_policy_name_principal`<sup>Required</sup> <a name="iam_policy_name_principal" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.property.iamPolicyNamePrincipal"></a>

```python
iam_policy_name_principal: str
```

- *Type:* str

---

##### `iam_policy_uid_principal`<sup>Required</sup> <a name="iam_policy_uid_principal" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.property.iamPolicyUidPrincipal"></a>

```python
iam_policy_uid_principal: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMemberOutputReference.property.internalValue"></a>

```python
internal_value: ParameterManagerParameterPolicyMember
```

- *Type:* <a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterPolicyMember">ParameterManagerParameterPolicyMember</a>

---


### ParameterManagerParameterTimeoutsOutputReference <a name="ParameterManagerParameterTimeoutsOutputReference" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import parameter_manager_parameter

parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeouts">ParameterManagerParameterTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ParameterManagerParameterTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.parameterManagerParameter.ParameterManagerParameterTimeouts">ParameterManagerParameterTimeouts</a>

---



