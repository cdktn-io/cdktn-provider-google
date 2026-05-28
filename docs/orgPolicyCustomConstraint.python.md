# `orgPolicyCustomConstraint` Submodule <a name="`orgPolicyCustomConstraint` Submodule" id="@cdktn/provider-google.orgPolicyCustomConstraint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrgPolicyCustomConstraint <a name="OrgPolicyCustomConstraint" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint google_org_policy_custom_constraint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer"></a>

```python
from cdktn_provider_google import org_policy_custom_constraint

orgPolicyCustomConstraint.OrgPolicyCustomConstraint(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action_type: str,
  condition: str,
  method_types: typing.List[str],
  name: str,
  parent: str,
  resource_types: typing.List[str],
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  timeouts: OrgPolicyCustomConstraintTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.actionType">action_type</a></code> | <code>str</code> | The action to take if the condition is met. Possible values: ["ALLOW", "DENY"]. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.condition">condition</a></code> | <code>str</code> | A CEL condition that refers to a supported service resource, for example 'resource.management.autoUpgrade == false'. For details about CEL usage, see [Common Expression Language](https://docs.cloud.google.com/resource-manager/docs/organization-policy/creating-managing-custom-constraints#common_expression_language). |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.methodTypes">method_types</a></code> | <code>typing.List[str]</code> | A list of RESTful methods for which to enforce the constraint. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.name">name</a></code> | <code>str</code> | Immutable. The name of the custom constraint. This is unique within the organization. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The parent of the resource, an organization. Format should be 'organizations/{organization_id}'. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | Immutable. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.description">description</a></code> | <code>str</code> | A human-friendly description of the constraint to display as an error message when the policy is violated. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | A human-friendly name for the constraint. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint#id OrgPolicyCustomConstraint#id}. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts">OrgPolicyCustomConstraintTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.actionType"></a>

- *Type:* str

The action to take if the condition is met. Possible values: ["ALLOW", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint#action_type OrgPolicyCustomConstraint#action_type}

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.condition"></a>

- *Type:* str

A CEL condition that refers to a supported service resource, for example 'resource.management.autoUpgrade == false'. For details about CEL usage, see [Common Expression Language](https://docs.cloud.google.com/resource-manager/docs/organization-policy/creating-managing-custom-constraints#common_expression_language).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint#condition OrgPolicyCustomConstraint#condition}

---

##### `method_types`<sup>Required</sup> <a name="method_types" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.methodTypes"></a>

- *Type:* typing.List[str]

A list of RESTful methods for which to enforce the constraint.

Can be 'CREATE', 'UPDATE', or both. Not all Google Cloud services support both methods. To see supported methods for each service, find the service in [Supported services](https://docs.cloud.google.com/resource-manager/docs/organization-policy/custom-constraint-supported-services).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint#method_types OrgPolicyCustomConstraint#method_types}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.name"></a>

- *Type:* str

Immutable. The name of the custom constraint. This is unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint#name OrgPolicyCustomConstraint#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.parent"></a>

- *Type:* str

The parent of the resource, an organization. Format should be 'organizations/{organization_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint#parent OrgPolicyCustomConstraint#parent}

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.resourceTypes"></a>

- *Type:* typing.List[str]

Immutable.

The fully qualified name of the Google Cloud REST resource containing the object and field you want to restrict. For example, 'container.googleapis.com/NodePool'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint#resource_types OrgPolicyCustomConstraint#resource_types}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint#deletion_policy OrgPolicyCustomConstraint#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.description"></a>

- *Type:* str

A human-friendly description of the constraint to display as an error message when the policy is violated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint#description OrgPolicyCustomConstraint#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.displayName"></a>

- *Type:* str

A human-friendly name for the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint#display_name OrgPolicyCustomConstraint#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint#id OrgPolicyCustomConstraint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts">OrgPolicyCustomConstraintTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint#timeouts OrgPolicyCustomConstraint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint#create OrgPolicyCustomConstraint#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint#delete OrgPolicyCustomConstraint#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint#update OrgPolicyCustomConstraint#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OrgPolicyCustomConstraint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.isConstruct"></a>

```python
from cdktn_provider_google import org_policy_custom_constraint

orgPolicyCustomConstraint.OrgPolicyCustomConstraint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.isTerraformElement"></a>

```python
from cdktn_provider_google import org_policy_custom_constraint

orgPolicyCustomConstraint.OrgPolicyCustomConstraint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.isTerraformResource"></a>

```python
from cdktn_provider_google import org_policy_custom_constraint

orgPolicyCustomConstraint.OrgPolicyCustomConstraint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.generateConfigForImport"></a>

```python
from cdktn_provider_google import org_policy_custom_constraint

orgPolicyCustomConstraint.OrgPolicyCustomConstraint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OrgPolicyCustomConstraint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OrgPolicyCustomConstraint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OrgPolicyCustomConstraint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OrgPolicyCustomConstraint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference">OrgPolicyCustomConstraintTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.actionTypeInput">action_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.methodTypesInput">method_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.resourceTypesInput">resource_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts">OrgPolicyCustomConstraintTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.actionType">action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.methodTypes">method_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.timeouts"></a>

```python
timeouts: OrgPolicyCustomConstraintTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference">OrgPolicyCustomConstraintTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `action_type_input`<sup>Optional</sup> <a name="action_type_input" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.actionTypeInput"></a>

```python
action_type_input: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `method_types_input`<sup>Optional</sup> <a name="method_types_input" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.methodTypesInput"></a>

```python
method_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `resource_types_input`<sup>Optional</sup> <a name="resource_types_input" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.resourceTypesInput"></a>

```python
resource_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | OrgPolicyCustomConstraintTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts">OrgPolicyCustomConstraintTimeouts</a>

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `method_types`<sup>Required</sup> <a name="method_types" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.methodTypes"></a>

```python
method_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OrgPolicyCustomConstraintConfig <a name="OrgPolicyCustomConstraintConfig" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.Initializer"></a>

```python
from cdktn_provider_google import org_policy_custom_constraint

orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action_type: str,
  condition: str,
  method_types: typing.List[str],
  name: str,
  parent: str,
  resource_types: typing.List[str],
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  timeouts: OrgPolicyCustomConstraintTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.actionType">action_type</a></code> | <code>str</code> | The action to take if the condition is met. Possible values: ["ALLOW", "DENY"]. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.condition">condition</a></code> | <code>str</code> | A CEL condition that refers to a supported service resource, for example 'resource.management.autoUpgrade == false'. For details about CEL usage, see [Common Expression Language](https://docs.cloud.google.com/resource-manager/docs/organization-policy/creating-managing-custom-constraints#common_expression_language). |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.methodTypes">method_types</a></code> | <code>typing.List[str]</code> | A list of RESTful methods for which to enforce the constraint. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.name">name</a></code> | <code>str</code> | Immutable. The name of the custom constraint. This is unique within the organization. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.parent">parent</a></code> | <code>str</code> | The parent of the resource, an organization. Format should be 'organizations/{organization_id}'. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | Immutable. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.description">description</a></code> | <code>str</code> | A human-friendly description of the constraint to display as an error message when the policy is violated. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.displayName">display_name</a></code> | <code>str</code> | A human-friendly name for the constraint. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint#id OrgPolicyCustomConstraint#id}. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts">OrgPolicyCustomConstraintTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

The action to take if the condition is met. Possible values: ["ALLOW", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint#action_type OrgPolicyCustomConstraint#action_type}

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.condition"></a>

```python
condition: str
```

- *Type:* str

A CEL condition that refers to a supported service resource, for example 'resource.management.autoUpgrade == false'. For details about CEL usage, see [Common Expression Language](https://docs.cloud.google.com/resource-manager/docs/organization-policy/creating-managing-custom-constraints#common_expression_language).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint#condition OrgPolicyCustomConstraint#condition}

---

##### `method_types`<sup>Required</sup> <a name="method_types" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.methodTypes"></a>

```python
method_types: typing.List[str]
```

- *Type:* typing.List[str]

A list of RESTful methods for which to enforce the constraint.

Can be 'CREATE', 'UPDATE', or both. Not all Google Cloud services support both methods. To see supported methods for each service, find the service in [Supported services](https://docs.cloud.google.com/resource-manager/docs/organization-policy/custom-constraint-supported-services).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint#method_types OrgPolicyCustomConstraint#method_types}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Immutable. The name of the custom constraint. This is unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint#name OrgPolicyCustomConstraint#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The parent of the resource, an organization. Format should be 'organizations/{organization_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint#parent OrgPolicyCustomConstraint#parent}

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

Immutable.

The fully qualified name of the Google Cloud REST resource containing the object and field you want to restrict. For example, 'container.googleapis.com/NodePool'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint#resource_types OrgPolicyCustomConstraint#resource_types}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint#deletion_policy OrgPolicyCustomConstraint#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A human-friendly description of the constraint to display as an error message when the policy is violated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint#description OrgPolicyCustomConstraint#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

A human-friendly name for the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint#display_name OrgPolicyCustomConstraint#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint#id OrgPolicyCustomConstraint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintConfig.property.timeouts"></a>

```python
timeouts: OrgPolicyCustomConstraintTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts">OrgPolicyCustomConstraintTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint#timeouts OrgPolicyCustomConstraint#timeouts}

---

### OrgPolicyCustomConstraintTimeouts <a name="OrgPolicyCustomConstraintTimeouts" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts.Initializer"></a>

```python
from cdktn_provider_google import org_policy_custom_constraint

orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint#create OrgPolicyCustomConstraint#create}. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint#delete OrgPolicyCustomConstraint#delete}. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint#update OrgPolicyCustomConstraint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint#create OrgPolicyCustomConstraint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint#delete OrgPolicyCustomConstraint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/org_policy_custom_constraint#update OrgPolicyCustomConstraint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OrgPolicyCustomConstraintTimeoutsOutputReference <a name="OrgPolicyCustomConstraintTimeoutsOutputReference" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import org_policy_custom_constraint

orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts">OrgPolicyCustomConstraintTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OrgPolicyCustomConstraintTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.orgPolicyCustomConstraint.OrgPolicyCustomConstraintTimeouts">OrgPolicyCustomConstraintTimeouts</a>

---



