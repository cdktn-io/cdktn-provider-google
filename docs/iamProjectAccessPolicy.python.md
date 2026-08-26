# `iamProjectAccessPolicy` Submodule <a name="`iamProjectAccessPolicy` Submodule" id="@cdktn/provider-google.iamProjectAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamProjectAccessPolicy <a name="IamProjectAccessPolicy" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy google_iam_project_access_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer"></a>

```python
from cdktn_provider_google import iam_project_access_policy

iamProjectAccessPolicy.IamProjectAccessPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_policy_id: str,
  location: str,
  annotations: typing.Mapping[str] = None,
  deletion_policy: str = None,
  details: IamProjectAccessPolicyDetails = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: IamProjectAccessPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.accessPolicyId">access_policy_id</a></code> | <code>str</code> | The ID to use for the access policy, which will become the final component of the access policy's resource name. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.details">details</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetails">IamProjectAccessPolicyDetails</a></code> | details block. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The description of the access policy. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#id IamProjectAccessPolicy#id}. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#project IamProjectAccessPolicy#project}. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts">IamProjectAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_policy_id`<sup>Required</sup> <a name="access_policy_id" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.accessPolicyId"></a>

- *Type:* str

The ID to use for the access policy, which will become the final component of the access policy's resource name.

This value must start with a lowercase letter followed by up to 62
lowercase letters, numbers, hyphens, or dots. Pattern,
/a-z{2,62}/.
This value must be unique among all access policies with the same parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#access_policy_id IamProjectAccessPolicy#access_policy_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#location IamProjectAccessPolicy#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#annotations IamProjectAccessPolicy#annotations}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#deletion_policy IamProjectAccessPolicy#deletion_policy}

---

##### `details`<sup>Optional</sup> <a name="details" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.details"></a>

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetails">IamProjectAccessPolicyDetails</a>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#details IamProjectAccessPolicy#details}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.displayName"></a>

- *Type:* str

The description of the access policy. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#display_name IamProjectAccessPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#id IamProjectAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#project IamProjectAccessPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts">IamProjectAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#timeouts IamProjectAccessPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.putDetails">put_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetDetails">reset_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_details` <a name="put_details" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.putDetails"></a>

```python
def put_details(
  rules: IResolvable | typing.List[IamProjectAccessPolicyDetailsRules]
) -> None
```

###### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.putDetails.parameter.rules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules">IamProjectAccessPolicyDetailsRules</a>]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#rules IamProjectAccessPolicy#rules}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#create IamProjectAccessPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#delete IamProjectAccessPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#update IamProjectAccessPolicy#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_details` <a name="reset_details" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetDetails"></a>

```python
def reset_details() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IamProjectAccessPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.isConstruct"></a>

```python
from cdktn_provider_google import iam_project_access_policy

iamProjectAccessPolicy.IamProjectAccessPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.isTerraformElement"></a>

```python
from cdktn_provider_google import iam_project_access_policy

iamProjectAccessPolicy.IamProjectAccessPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.isTerraformResource"></a>

```python
from cdktn_provider_google import iam_project_access_policy

iamProjectAccessPolicy.IamProjectAccessPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_google import iam_project_access_policy

iamProjectAccessPolicy.IamProjectAccessPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IamProjectAccessPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IamProjectAccessPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IamProjectAccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IamProjectAccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.details">details</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference">IamProjectAccessPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference">IamProjectAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.accessPolicyIdInput">access_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.detailsInput">details_input</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetails">IamProjectAccessPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts">IamProjectAccessPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.accessPolicyId">access_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.details"></a>

```python
details: IamProjectAccessPolicyDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference">IamProjectAccessPolicyDetailsOutputReference</a>

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.timeouts"></a>

```python
timeouts: IamProjectAccessPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference">IamProjectAccessPolicyTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `access_policy_id_input`<sup>Optional</sup> <a name="access_policy_id_input" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.accessPolicyIdInput"></a>

```python
access_policy_id_input: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `details_input`<sup>Optional</sup> <a name="details_input" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.detailsInput"></a>

```python
details_input: IamProjectAccessPolicyDetails
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetails">IamProjectAccessPolicyDetails</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | IamProjectAccessPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts">IamProjectAccessPolicyTimeouts</a>

---

##### `access_policy_id`<sup>Required</sup> <a name="access_policy_id" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.accessPolicyId"></a>

```python
access_policy_id: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IamProjectAccessPolicyConfig <a name="IamProjectAccessPolicyConfig" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.Initializer"></a>

```python
from cdktn_provider_google import iam_project_access_policy

iamProjectAccessPolicy.IamProjectAccessPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_policy_id: str,
  location: str,
  annotations: typing.Mapping[str] = None,
  deletion_policy: str = None,
  details: IamProjectAccessPolicyDetails = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: IamProjectAccessPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.accessPolicyId">access_policy_id</a></code> | <code>str</code> | The ID to use for the access policy, which will become the final component of the access policy's resource name. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.details">details</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetails">IamProjectAccessPolicyDetails</a></code> | details block. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.displayName">display_name</a></code> | <code>str</code> | The description of the access policy. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#id IamProjectAccessPolicy#id}. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#project IamProjectAccessPolicy#project}. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts">IamProjectAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_policy_id`<sup>Required</sup> <a name="access_policy_id" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.accessPolicyId"></a>

```python
access_policy_id: str
```

- *Type:* str

The ID to use for the access policy, which will become the final component of the access policy's resource name.

This value must start with a lowercase letter followed by up to 62
lowercase letters, numbers, hyphens, or dots. Pattern,
/a-z{2,62}/.
This value must be unique among all access policies with the same parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#access_policy_id IamProjectAccessPolicy#access_policy_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#location IamProjectAccessPolicy#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#annotations IamProjectAccessPolicy#annotations}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#deletion_policy IamProjectAccessPolicy#deletion_policy}

---

##### `details`<sup>Optional</sup> <a name="details" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.details"></a>

```python
details: IamProjectAccessPolicyDetails
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetails">IamProjectAccessPolicyDetails</a>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#details IamProjectAccessPolicy#details}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The description of the access policy. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#display_name IamProjectAccessPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#id IamProjectAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#project IamProjectAccessPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.timeouts"></a>

```python
timeouts: IamProjectAccessPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts">IamProjectAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#timeouts IamProjectAccessPolicy#timeouts}

---

### IamProjectAccessPolicyDetails <a name="IamProjectAccessPolicyDetails" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetails.Initializer"></a>

```python
from cdktn_provider_google import iam_project_access_policy

iamProjectAccessPolicy.IamProjectAccessPolicyDetails(
  rules: IResolvable | typing.List[IamProjectAccessPolicyDetailsRules]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetails.property.rules">rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules">IamProjectAccessPolicyDetailsRules</a>]</code> | rules block. |

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetails.property.rules"></a>

```python
rules: IResolvable | typing.List[IamProjectAccessPolicyDetailsRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules">IamProjectAccessPolicyDetailsRules</a>]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#rules IamProjectAccessPolicy#rules}

---

### IamProjectAccessPolicyDetailsRules <a name="IamProjectAccessPolicyDetailsRules" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.Initializer"></a>

```python
from cdktn_provider_google import iam_project_access_policy

iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules(
  effect: str,
  operation: IamProjectAccessPolicyDetailsRulesOperation,
  principals: typing.List[str],
  conditions: IResolvable | typing.List[IamProjectAccessPolicyDetailsRulesConditions] = None,
  description: str = None,
  excluded_principals: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.effect">effect</a></code> | <code>str</code> | The effect of the rule. Possible values: DENY ALLOW Possible values: ["DENY", "ALLOW"]. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.operation">operation</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation">IamProjectAccessPolicyDetailsRulesOperation</a></code> | operation block. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.principals">principals</a></code> | <code>typing.List[str]</code> | The identities for which this rule's effect governs using one or more permissions on Google Cloud resources. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.conditions">conditions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions">IamProjectAccessPolicyDetailsRulesConditions</a>]</code> | conditions block. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.description">description</a></code> | <code>str</code> | Customer specified description of the rule. Must be less than or equal to 256 characters. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.excludedPrincipals">excluded_principals</a></code> | <code>typing.List[str]</code> | The identities that are excluded from the access policy rule, even if they are listed in the 'principals'. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.effect"></a>

```python
effect: str
```

- *Type:* str

The effect of the rule. Possible values: DENY ALLOW Possible values: ["DENY", "ALLOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#effect IamProjectAccessPolicy#effect}

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.operation"></a>

```python
operation: IamProjectAccessPolicyDetailsRulesOperation
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation">IamProjectAccessPolicyDetailsRulesOperation</a>

operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#operation IamProjectAccessPolicy#operation}

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.principals"></a>

```python
principals: typing.List[str]
```

- *Type:* typing.List[str]

The identities for which this rule's effect governs using one or more permissions on Google Cloud resources.

This field can contain the
following values:

* 'principal://goog/subject/{email_id}': A specific Google Account.
  Includes Gmail, Cloud Identity, and Google Workspace user accounts. For
  example, 'principal://goog/subject/alice@example.com'.
* 'principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id}':
  A Google Cloud service account. For example,
  'principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com'.
* 'principalSet://goog/group/{group_id}': A Google group. For example,
  'principalSet://goog/group/admins@example.com'.
* 'principalSet://goog/cloudIdentityCustomerId/{customer_id}': All of the
  principals associated with the specified Google Workspace or Cloud
  Identity customer ID. For example,
  'principalSet://goog/cloudIdentityCustomerId/C01Abc35'.
  If an identifier that was previously set on a policy is soft deleted, then
  calls to read that policy will return the identifier with a deleted
  prefix. Users cannot set identifiers with this syntax.
* 'deleted:principal://goog/subject/{email_id}?uid={uid}': A specific
  Google Account that was deleted recently. For example,
  'deleted:principal://goog/subject/alice@example.com?uid=1234567890'. If
  the Google Account is recovered, this identifier reverts to the standard
  identifier for a Google Account.
* 'deleted:principalSet://goog/group/{group_id}?uid={uid}': A Google group
  that was deleted recently. For example,
  'deleted:principalSet://goog/group/admins@example.com?uid=1234567890'.
  If the Google group is restored, this identifier reverts to the standard
  identifier for a Google group.
* 'deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id}?uid={uid}':
  A Google Cloud service account that was deleted recently. For example,
  'deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com?uid=1234567890'.
  If the service account is undeleted, this identifier reverts to the
  standard identifier for a service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#principals IamProjectAccessPolicy#principals}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.conditions"></a>

```python
conditions: IResolvable | typing.List[IamProjectAccessPolicyDetailsRulesConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions">IamProjectAccessPolicyDetailsRulesConditions</a>]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#conditions IamProjectAccessPolicy#conditions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.description"></a>

```python
description: str
```

- *Type:* str

Customer specified description of the rule. Must be less than or equal to 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#description IamProjectAccessPolicy#description}

---

##### `excluded_principals`<sup>Optional</sup> <a name="excluded_principals" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.excludedPrincipals"></a>

```python
excluded_principals: typing.List[str]
```

- *Type:* typing.List[str]

The identities that are excluded from the access policy rule, even if they are listed in the 'principals'.

For example, you could add a Google
group to the 'principals', then exclude specific users who belong to
that group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#excluded_principals IamProjectAccessPolicy#excluded_principals}

---

### IamProjectAccessPolicyDetailsRulesConditions <a name="IamProjectAccessPolicyDetailsRulesConditions" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions.Initializer"></a>

```python
from cdktn_provider_google import iam_project_access_policy

iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions(
  service: str,
  expression: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions.property.service">service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#service IamProjectAccessPolicy#service}. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions.property.service"></a>

```python
service: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#service IamProjectAccessPolicy#service}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#expression IamProjectAccessPolicy#expression}

---

### IamProjectAccessPolicyDetailsRulesOperation <a name="IamProjectAccessPolicyDetailsRulesOperation" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation.Initializer"></a>

```python
from cdktn_provider_google import iam_project_access_policy

iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation(
  permissions: typing.List[str],
  excluded_permissions: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | The permissions that are explicitly affected by this rule. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation.property.excludedPermissions">excluded_permissions</a></code> | <code>typing.List[str]</code> | Specifies the permissions that this rule excludes from the set of affected permissions given by 'permissions'. |

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

The permissions that are explicitly affected by this rule.

Each
permission uses the format '{service_fqdn}/{resource}.{verb}', where
'{service_fqdn}' is the fully qualified domain name for the service.
Currently supported permissions are as follows:

* 'eventarc.googleapis.com/messageBuses.publish'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#permissions IamProjectAccessPolicy#permissions}

---

##### `excluded_permissions`<sup>Optional</sup> <a name="excluded_permissions" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation.property.excludedPermissions"></a>

```python
excluded_permissions: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the permissions that this rule excludes from the set of affected permissions given by 'permissions'.

If a permission appears in
'permissions' *and* in 'excluded_permissions' then it will *not* be
subject to the policy effect.
The excluded permissions can be specified using the same syntax as
'permissions'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#excluded_permissions IamProjectAccessPolicy#excluded_permissions}

---

### IamProjectAccessPolicyTimeouts <a name="IamProjectAccessPolicyTimeouts" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts.Initializer"></a>

```python
from cdktn_provider_google import iam_project_access_policy

iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#create IamProjectAccessPolicy#create}. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#delete IamProjectAccessPolicy#delete}. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#update IamProjectAccessPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#create IamProjectAccessPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#delete IamProjectAccessPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#update IamProjectAccessPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamProjectAccessPolicyDetailsOutputReference <a name="IamProjectAccessPolicyDetailsOutputReference" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import iam_project_access_policy

iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.putRules">put_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rules` <a name="put_rules" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.putRules"></a>

```python
def put_rules(
  value: IResolvable | typing.List[IamProjectAccessPolicyDetailsRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules">IamProjectAccessPolicyDetailsRules</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList">IamProjectAccessPolicyDetailsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.property.rulesInput">rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules">IamProjectAccessPolicyDetailsRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetails">IamProjectAccessPolicyDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.property.rules"></a>

```python
rules: IamProjectAccessPolicyDetailsRulesList
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList">IamProjectAccessPolicyDetailsRulesList</a>

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.property.rulesInput"></a>

```python
rules_input: IResolvable | typing.List[IamProjectAccessPolicyDetailsRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules">IamProjectAccessPolicyDetailsRules</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IamProjectAccessPolicyDetails
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetails">IamProjectAccessPolicyDetails</a>

---


### IamProjectAccessPolicyDetailsRulesConditionsList <a name="IamProjectAccessPolicyDetailsRulesConditionsList" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.Initializer"></a>

```python
from cdktn_provider_google import iam_project_access_policy

iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IamProjectAccessPolicyDetailsRulesConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions">IamProjectAccessPolicyDetailsRulesConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IamProjectAccessPolicyDetailsRulesConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions">IamProjectAccessPolicyDetailsRulesConditions</a>]

---


### IamProjectAccessPolicyDetailsRulesConditionsOutputReference <a name="IamProjectAccessPolicyDetailsRulesConditionsOutputReference" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import iam_project_access_policy

iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.resetExpression">reset_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expression` <a name="reset_expression" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions">IamProjectAccessPolicyDetailsRulesConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IamProjectAccessPolicyDetailsRulesConditions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions">IamProjectAccessPolicyDetailsRulesConditions</a>

---


### IamProjectAccessPolicyDetailsRulesList <a name="IamProjectAccessPolicyDetailsRulesList" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.Initializer"></a>

```python
from cdktn_provider_google import iam_project_access_policy

iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IamProjectAccessPolicyDetailsRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules">IamProjectAccessPolicyDetailsRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IamProjectAccessPolicyDetailsRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules">IamProjectAccessPolicyDetailsRules</a>]

---


### IamProjectAccessPolicyDetailsRulesOperationOutputReference <a name="IamProjectAccessPolicyDetailsRulesOperationOutputReference" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.Initializer"></a>

```python
from cdktn_provider_google import iam_project_access_policy

iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.resetExcludedPermissions">reset_excluded_permissions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_excluded_permissions` <a name="reset_excluded_permissions" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.resetExcludedPermissions"></a>

```python
def reset_excluded_permissions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissionsInput">excluded_permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.permissionsInput">permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissions">excluded_permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation">IamProjectAccessPolicyDetailsRulesOperation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excluded_permissions_input`<sup>Optional</sup> <a name="excluded_permissions_input" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissionsInput"></a>

```python
excluded_permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.permissionsInput"></a>

```python
permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_permissions`<sup>Required</sup> <a name="excluded_permissions" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissions"></a>

```python
excluded_permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.internalValue"></a>

```python
internal_value: IamProjectAccessPolicyDetailsRulesOperation
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation">IamProjectAccessPolicyDetailsRulesOperation</a>

---


### IamProjectAccessPolicyDetailsRulesOutputReference <a name="IamProjectAccessPolicyDetailsRulesOutputReference" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import iam_project_access_policy

iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.putConditions">put_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.putOperation">put_operation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.resetConditions">reset_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.resetExcludedPrincipals">reset_excluded_principals</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_conditions` <a name="put_conditions" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.putConditions"></a>

```python
def put_conditions(
  value: IResolvable | typing.List[IamProjectAccessPolicyDetailsRulesConditions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.putConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions">IamProjectAccessPolicyDetailsRulesConditions</a>]

---

##### `put_operation` <a name="put_operation" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.putOperation"></a>

```python
def put_operation(
  permissions: typing.List[str],
  excluded_permissions: typing.List[str] = None
) -> None
```

###### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.putOperation.parameter.permissions"></a>

- *Type:* typing.List[str]

The permissions that are explicitly affected by this rule.

Each
permission uses the format '{service_fqdn}/{resource}.{verb}', where
'{service_fqdn}' is the fully qualified domain name for the service.
Currently supported permissions are as follows:

* 'eventarc.googleapis.com/messageBuses.publish'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#permissions IamProjectAccessPolicy#permissions}

---

###### `excluded_permissions`<sup>Optional</sup> <a name="excluded_permissions" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.putOperation.parameter.excludedPermissions"></a>

- *Type:* typing.List[str]

Specifies the permissions that this rule excludes from the set of affected permissions given by 'permissions'.

If a permission appears in
'permissions' *and* in 'excluded_permissions' then it will *not* be
subject to the policy effect.
The excluded permissions can be specified using the same syntax as
'permissions'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_project_access_policy#excluded_permissions IamProjectAccessPolicy#excluded_permissions}

---

##### `reset_conditions` <a name="reset_conditions" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.resetConditions"></a>

```python
def reset_conditions() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_excluded_principals` <a name="reset_excluded_principals" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.resetExcludedPrincipals"></a>

```python
def reset_excluded_principals() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList">IamProjectAccessPolicyDetailsRulesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.operation">operation</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference">IamProjectAccessPolicyDetailsRulesOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.conditionsInput">conditions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions">IamProjectAccessPolicyDetailsRulesConditions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.effectInput">effect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.excludedPrincipalsInput">excluded_principals_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.operationInput">operation_input</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation">IamProjectAccessPolicyDetailsRulesOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.principalsInput">principals_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.effect">effect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.excludedPrincipals">excluded_principals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.principals">principals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules">IamProjectAccessPolicyDetailsRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.conditions"></a>

```python
conditions: IamProjectAccessPolicyDetailsRulesConditionsList
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList">IamProjectAccessPolicyDetailsRulesConditionsList</a>

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.operation"></a>

```python
operation: IamProjectAccessPolicyDetailsRulesOperationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference">IamProjectAccessPolicyDetailsRulesOperationOutputReference</a>

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.conditionsInput"></a>

```python
conditions_input: IResolvable | typing.List[IamProjectAccessPolicyDetailsRulesConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions">IamProjectAccessPolicyDetailsRulesConditions</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `effect_input`<sup>Optional</sup> <a name="effect_input" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.effectInput"></a>

```python
effect_input: str
```

- *Type:* str

---

##### `excluded_principals_input`<sup>Optional</sup> <a name="excluded_principals_input" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.excludedPrincipalsInput"></a>

```python
excluded_principals_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operation_input`<sup>Optional</sup> <a name="operation_input" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.operationInput"></a>

```python
operation_input: IamProjectAccessPolicyDetailsRulesOperation
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation">IamProjectAccessPolicyDetailsRulesOperation</a>

---

##### `principals_input`<sup>Optional</sup> <a name="principals_input" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.principalsInput"></a>

```python
principals_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.effect"></a>

```python
effect: str
```

- *Type:* str

---

##### `excluded_principals`<sup>Required</sup> <a name="excluded_principals" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.excludedPrincipals"></a>

```python
excluded_principals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.principals"></a>

```python
principals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IamProjectAccessPolicyDetailsRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules">IamProjectAccessPolicyDetailsRules</a>

---


### IamProjectAccessPolicyTimeoutsOutputReference <a name="IamProjectAccessPolicyTimeoutsOutputReference" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import iam_project_access_policy

iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts">IamProjectAccessPolicyTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IamProjectAccessPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts">IamProjectAccessPolicyTimeouts</a>

---



