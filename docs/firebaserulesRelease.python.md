# `firebaserulesRelease` Submodule <a name="`firebaserulesRelease` Submodule" id="@cdktn/provider-google.firebaserulesRelease"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirebaserulesRelease <a name="FirebaserulesRelease" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firebaserules_release google_firebaserules_release}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.Initializer"></a>

```python
from cdktn_provider_google import firebaserules_release

firebaserulesRelease.FirebaserulesRelease(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  ruleset_name: str,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: FirebaserulesReleaseTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.Initializer.parameter.name">name</a></code> | <code>str</code> | Format: `projects/{project_id}/releases/{release_id}`\Firestore Rules Releases will **always** have the name 'cloud.firestore'. |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.Initializer.parameter.rulesetName">ruleset_name</a></code> | <code>str</code> | Name of the `Ruleset` referred to by this `Release`. The `Ruleset` must exist for the `Release` to be created. |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firebaserules_release#id FirebaserulesRelease#id}. |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.Initializer.parameter.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeouts">FirebaserulesReleaseTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.Initializer.parameter.name"></a>

- *Type:* str

Format: `projects/{project_id}/releases/{release_id}`\Firestore Rules Releases will **always** have the name 'cloud.firestore'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firebaserules_release#name FirebaserulesRelease#name}

---

##### `ruleset_name`<sup>Required</sup> <a name="ruleset_name" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.Initializer.parameter.rulesetName"></a>

- *Type:* str

Name of the `Ruleset` referred to by this `Release`. The `Ruleset` must exist for the `Release` to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firebaserules_release#ruleset_name FirebaserulesRelease#ruleset_name}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firebaserules_release#deletion_policy FirebaserulesRelease#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firebaserules_release#id FirebaserulesRelease#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.Initializer.parameter.project"></a>

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firebaserules_release#project FirebaserulesRelease#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeouts">FirebaserulesReleaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firebaserules_release#timeouts FirebaserulesRelease#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firebaserules_release#create FirebaserulesRelease#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firebaserules_release#delete FirebaserulesRelease#delete}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a FirebaserulesRelease resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.isConstruct"></a>

```python
from cdktn_provider_google import firebaserules_release

firebaserulesRelease.FirebaserulesRelease.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.isTerraformElement"></a>

```python
from cdktn_provider_google import firebaserules_release

firebaserulesRelease.FirebaserulesRelease.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.isTerraformResource"></a>

```python
from cdktn_provider_google import firebaserules_release

firebaserulesRelease.FirebaserulesRelease.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.generateConfigForImport"></a>

```python
from cdktn_provider_google import firebaserules_release

firebaserulesRelease.FirebaserulesRelease.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a FirebaserulesRelease resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FirebaserulesRelease to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FirebaserulesRelease that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firebaserules_release#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FirebaserulesRelease to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.disabled">disabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference">FirebaserulesReleaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.rulesetNameInput">ruleset_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeouts">FirebaserulesReleaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.rulesetName">ruleset_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.disabled"></a>

```python
disabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.timeouts"></a>

```python
timeouts: FirebaserulesReleaseTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference">FirebaserulesReleaseTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `ruleset_name_input`<sup>Optional</sup> <a name="ruleset_name_input" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.rulesetNameInput"></a>

```python
ruleset_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | FirebaserulesReleaseTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeouts">FirebaserulesReleaseTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `ruleset_name`<sup>Required</sup> <a name="ruleset_name" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.rulesetName"></a>

```python
ruleset_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesRelease.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FirebaserulesReleaseConfig <a name="FirebaserulesReleaseConfig" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseConfig.Initializer"></a>

```python
from cdktn_provider_google import firebaserules_release

firebaserulesRelease.FirebaserulesReleaseConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  ruleset_name: str,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: FirebaserulesReleaseTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseConfig.property.name">name</a></code> | <code>str</code> | Format: `projects/{project_id}/releases/{release_id}`\Firestore Rules Releases will **always** have the name 'cloud.firestore'. |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseConfig.property.rulesetName">ruleset_name</a></code> | <code>str</code> | Name of the `Ruleset` referred to by this `Release`. The `Ruleset` must exist for the `Release` to be created. |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firebaserules_release#id FirebaserulesRelease#id}. |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseConfig.property.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeouts">FirebaserulesReleaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Format: `projects/{project_id}/releases/{release_id}`\Firestore Rules Releases will **always** have the name 'cloud.firestore'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firebaserules_release#name FirebaserulesRelease#name}

---

##### `ruleset_name`<sup>Required</sup> <a name="ruleset_name" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseConfig.property.rulesetName"></a>

```python
ruleset_name: str
```

- *Type:* str

Name of the `Ruleset` referred to by this `Release`. The `Ruleset` must exist for the `Release` to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firebaserules_release#ruleset_name FirebaserulesRelease#ruleset_name}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firebaserules_release#deletion_policy FirebaserulesRelease#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firebaserules_release#id FirebaserulesRelease#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firebaserules_release#project FirebaserulesRelease#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseConfig.property.timeouts"></a>

```python
timeouts: FirebaserulesReleaseTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeouts">FirebaserulesReleaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firebaserules_release#timeouts FirebaserulesRelease#timeouts}

---

### FirebaserulesReleaseTimeouts <a name="FirebaserulesReleaseTimeouts" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeouts.Initializer"></a>

```python
from cdktn_provider_google import firebaserules_release

firebaserulesRelease.FirebaserulesReleaseTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firebaserules_release#create FirebaserulesRelease#create}. |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firebaserules_release#delete FirebaserulesRelease#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firebaserules_release#create FirebaserulesRelease#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firebaserules_release#delete FirebaserulesRelease#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirebaserulesReleaseTimeoutsOutputReference <a name="FirebaserulesReleaseTimeoutsOutputReference" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import firebaserules_release

firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeouts">FirebaserulesReleaseTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FirebaserulesReleaseTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firebaserulesRelease.FirebaserulesReleaseTimeouts">FirebaserulesReleaseTimeouts</a>

---



