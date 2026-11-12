# `backupDrAutoProtectionPolicy` Submodule <a name="`backupDrAutoProtectionPolicy` Submodule" id="@cdktn/provider-google.backupDrAutoProtectionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupDrAutoProtectionPolicy <a name="BackupDrAutoProtectionPolicy" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy google_backup_dr_auto_protection_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer"></a>

```python
from cdktn_provider_google import backup_dr_auto_protection_policy

backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auto_protection_policy_id: str,
  backup_plan_details: IResolvable | typing.List[BackupDrAutoProtectionPolicyBackupPlanDetails],
  criteria: BackupDrAutoProtectionPolicyCriteria,
  location: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  project: str = None,
  timeouts: BackupDrAutoProtectionPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.autoProtectionPolicyId">auto_protection_policy_id</a></code> | <code>str</code> | The ID of the auto protection policy. This becomes the final component of the policy's resource name. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.backupPlanDetails">backup_plan_details</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>]</code> | backup_plan_details block. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a></code> | criteria block. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the auto protection policy. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the auto protection policy. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#id BackupDrAutoProtectionPolicy#id}. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#project BackupDrAutoProtectionPolicy#project}. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts">BackupDrAutoProtectionPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auto_protection_policy_id`<sup>Required</sup> <a name="auto_protection_policy_id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.autoProtectionPolicyId"></a>

- *Type:* str

The ID of the auto protection policy. This becomes the final component of the policy's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#auto_protection_policy_id BackupDrAutoProtectionPolicy#auto_protection_policy_id}

---

##### `backup_plan_details`<sup>Required</sup> <a name="backup_plan_details" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.backupPlanDetails"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>]

backup_plan_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#backup_plan_details BackupDrAutoProtectionPolicy#backup_plan_details}

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.criteria"></a>

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#criteria BackupDrAutoProtectionPolicy#criteria}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.location"></a>

- *Type:* str

The location of the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#location BackupDrAutoProtectionPolicy#location}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#deletion_policy BackupDrAutoProtectionPolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.description"></a>

- *Type:* str

A description of the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#description BackupDrAutoProtectionPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#id BackupDrAutoProtectionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#project BackupDrAutoProtectionPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts">BackupDrAutoProtectionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#timeouts BackupDrAutoProtectionPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putBackupPlanDetails">put_backup_plan_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putCriteria">put_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_backup_plan_details` <a name="put_backup_plan_details" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putBackupPlanDetails"></a>

```python
def put_backup_plan_details(
  value: IResolvable | typing.List[BackupDrAutoProtectionPolicyBackupPlanDetails]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putBackupPlanDetails.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>]

---

##### `put_criteria` <a name="put_criteria" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putCriteria"></a>

```python
def put_criteria(
  matching_conditions: IResolvable | typing.List[BackupDrAutoProtectionPolicyCriteriaMatchingConditions]
) -> None
```

###### `matching_conditions`<sup>Required</sup> <a name="matching_conditions" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putCriteria.parameter.matchingConditions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>]

matching_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#matching_conditions BackupDrAutoProtectionPolicy#matching_conditions}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#create BackupDrAutoProtectionPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#delete BackupDrAutoProtectionPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#update BackupDrAutoProtectionPolicy#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BackupDrAutoProtectionPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isConstruct"></a>

```python
from cdktn_provider_google import backup_dr_auto_protection_policy

backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isTerraformElement"></a>

```python
from cdktn_provider_google import backup_dr_auto_protection_policy

backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isTerraformResource"></a>

```python
from cdktn_provider_google import backup_dr_auto_protection_policy

backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_google import backup_dr_auto_protection_policy

backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BackupDrAutoProtectionPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BackupDrAutoProtectionPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BackupDrAutoProtectionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BackupDrAutoProtectionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.backupPlanDetails">backup_plan_details</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList">BackupDrAutoProtectionPolicyBackupPlanDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.bindingSummary">binding_summary</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList">BackupDrAutoProtectionPolicyBindingSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference">BackupDrAutoProtectionPolicyCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.policyEvaluationSummary">policy_evaluation_summary</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList">BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference">BackupDrAutoProtectionPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.autoProtectionPolicyIdInput">auto_protection_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.backupPlanDetailsInput">backup_plan_details_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.criteriaInput">criteria_input</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts">BackupDrAutoProtectionPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.autoProtectionPolicyId">auto_protection_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `backup_plan_details`<sup>Required</sup> <a name="backup_plan_details" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.backupPlanDetails"></a>

```python
backup_plan_details: BackupDrAutoProtectionPolicyBackupPlanDetailsList
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList">BackupDrAutoProtectionPolicyBackupPlanDetailsList</a>

---

##### `binding_summary`<sup>Required</sup> <a name="binding_summary" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.bindingSummary"></a>

```python
binding_summary: BackupDrAutoProtectionPolicyBindingSummaryList
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList">BackupDrAutoProtectionPolicyBindingSummaryList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.criteria"></a>

```python
criteria: BackupDrAutoProtectionPolicyCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference">BackupDrAutoProtectionPolicyCriteriaOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_evaluation_summary`<sup>Required</sup> <a name="policy_evaluation_summary" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.policyEvaluationSummary"></a>

```python
policy_evaluation_summary: BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList">BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.timeouts"></a>

```python
timeouts: BackupDrAutoProtectionPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference">BackupDrAutoProtectionPolicyTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `auto_protection_policy_id_input`<sup>Optional</sup> <a name="auto_protection_policy_id_input" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.autoProtectionPolicyIdInput"></a>

```python
auto_protection_policy_id_input: str
```

- *Type:* str

---

##### `backup_plan_details_input`<sup>Optional</sup> <a name="backup_plan_details_input" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.backupPlanDetailsInput"></a>

```python
backup_plan_details_input: IResolvable | typing.List[BackupDrAutoProtectionPolicyBackupPlanDetails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>]

---

##### `criteria_input`<sup>Optional</sup> <a name="criteria_input" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.criteriaInput"></a>

```python
criteria_input: BackupDrAutoProtectionPolicyCriteria
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | BackupDrAutoProtectionPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts">BackupDrAutoProtectionPolicyTimeouts</a>

---

##### `auto_protection_policy_id`<sup>Required</sup> <a name="auto_protection_policy_id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.autoProtectionPolicyId"></a>

```python
auto_protection_policy_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BackupDrAutoProtectionPolicyBackupPlanDetails <a name="BackupDrAutoProtectionPolicyBackupPlanDetails" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails.Initializer"></a>

```python
from cdktn_provider_google import backup_dr_auto_protection_policy

backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails(
  backup_plan: str,
  resource_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails.property.backupPlan">backup_plan</a></code> | <code>str</code> | The resource name of the backup plan to apply to the matching resources, in the format 'projects/{project}/locations/{location}/backupPlans/{backup_plan_id}'. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails.property.resourceType">resource_type</a></code> | <code>str</code> | The type of resource that this policy automatically protects, for example 'compute.googleapis.com/Instance' or 'compute.googleapis.com/Disk'. |

---

##### `backup_plan`<sup>Required</sup> <a name="backup_plan" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails.property.backupPlan"></a>

```python
backup_plan: str
```

- *Type:* str

The resource name of the backup plan to apply to the matching resources, in the format 'projects/{project}/locations/{location}/backupPlans/{backup_plan_id}'.

The backup plan
must be in the same location as the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#backup_plan BackupDrAutoProtectionPolicy#backup_plan}

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

The type of resource that this policy automatically protects, for example 'compute.googleapis.com/Instance' or 'compute.googleapis.com/Disk'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#resource_type BackupDrAutoProtectionPolicy#resource_type}

---

### BackupDrAutoProtectionPolicyBindingSummary <a name="BackupDrAutoProtectionPolicyBindingSummary" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummary.Initializer"></a>

```python
from cdktn_provider_google import backup_dr_auto_protection_policy

backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummary()
```


### BackupDrAutoProtectionPolicyConfig <a name="BackupDrAutoProtectionPolicyConfig" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.Initializer"></a>

```python
from cdktn_provider_google import backup_dr_auto_protection_policy

backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auto_protection_policy_id: str,
  backup_plan_details: IResolvable | typing.List[BackupDrAutoProtectionPolicyBackupPlanDetails],
  criteria: BackupDrAutoProtectionPolicyCriteria,
  location: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  project: str = None,
  timeouts: BackupDrAutoProtectionPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.autoProtectionPolicyId">auto_protection_policy_id</a></code> | <code>str</code> | The ID of the auto protection policy. This becomes the final component of the policy's resource name. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.backupPlanDetails">backup_plan_details</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>]</code> | backup_plan_details block. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a></code> | criteria block. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.location">location</a></code> | <code>str</code> | The location of the auto protection policy. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.description">description</a></code> | <code>str</code> | A description of the auto protection policy. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#id BackupDrAutoProtectionPolicy#id}. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#project BackupDrAutoProtectionPolicy#project}. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts">BackupDrAutoProtectionPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auto_protection_policy_id`<sup>Required</sup> <a name="auto_protection_policy_id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.autoProtectionPolicyId"></a>

```python
auto_protection_policy_id: str
```

- *Type:* str

The ID of the auto protection policy. This becomes the final component of the policy's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#auto_protection_policy_id BackupDrAutoProtectionPolicy#auto_protection_policy_id}

---

##### `backup_plan_details`<sup>Required</sup> <a name="backup_plan_details" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.backupPlanDetails"></a>

```python
backup_plan_details: IResolvable | typing.List[BackupDrAutoProtectionPolicyBackupPlanDetails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>]

backup_plan_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#backup_plan_details BackupDrAutoProtectionPolicy#backup_plan_details}

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.criteria"></a>

```python
criteria: BackupDrAutoProtectionPolicyCriteria
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#criteria BackupDrAutoProtectionPolicy#criteria}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#location BackupDrAutoProtectionPolicy#location}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#deletion_policy BackupDrAutoProtectionPolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#description BackupDrAutoProtectionPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#id BackupDrAutoProtectionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#project BackupDrAutoProtectionPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.timeouts"></a>

```python
timeouts: BackupDrAutoProtectionPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts">BackupDrAutoProtectionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#timeouts BackupDrAutoProtectionPolicy#timeouts}

---

### BackupDrAutoProtectionPolicyCriteria <a name="BackupDrAutoProtectionPolicyCriteria" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria.Initializer"></a>

```python
from cdktn_provider_google import backup_dr_auto_protection_policy

backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria(
  matching_conditions: IResolvable | typing.List[BackupDrAutoProtectionPolicyCriteriaMatchingConditions]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria.property.matchingConditions">matching_conditions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>]</code> | matching_conditions block. |

---

##### `matching_conditions`<sup>Required</sup> <a name="matching_conditions" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria.property.matchingConditions"></a>

```python
matching_conditions: IResolvable | typing.List[BackupDrAutoProtectionPolicyCriteriaMatchingConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>]

matching_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#matching_conditions BackupDrAutoProtectionPolicy#matching_conditions}

---

### BackupDrAutoProtectionPolicyCriteriaMatchingConditions <a name="BackupDrAutoProtectionPolicyCriteriaMatchingConditions" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions.Initializer"></a>

```python
from cdktn_provider_google import backup_dr_auto_protection_policy

backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions(
  label_condition: BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions.property.labelCondition">label_condition</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a></code> | label_condition block. |

---

##### `label_condition`<sup>Optional</sup> <a name="label_condition" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions.property.labelCondition"></a>

```python
label_condition: BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a>

label_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#label_condition BackupDrAutoProtectionPolicy#label_condition}

---

### BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition <a name="BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.Initializer"></a>

```python
from cdktn_provider_google import backup_dr_auto_protection_policy

backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition(
  key: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.property.key">key</a></code> | <code>str</code> | The key of the label to match. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.property.values">values</a></code> | <code>typing.List[str]</code> | The values of the label to match. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the label to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#key BackupDrAutoProtectionPolicy#key}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The values of the label to match.

A resource matches the condition if its label
value is equal to any of the listed values. Currently, only one value is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#values BackupDrAutoProtectionPolicy#values}

---

### BackupDrAutoProtectionPolicyPolicyEvaluationSummary <a name="BackupDrAutoProtectionPolicyPolicyEvaluationSummary" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummary.Initializer"></a>

```python
from cdktn_provider_google import backup_dr_auto_protection_policy

backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummary()
```


### BackupDrAutoProtectionPolicyTimeouts <a name="BackupDrAutoProtectionPolicyTimeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.Initializer"></a>

```python
from cdktn_provider_google import backup_dr_auto_protection_policy

backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#create BackupDrAutoProtectionPolicy#create}. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#delete BackupDrAutoProtectionPolicy#delete}. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#update BackupDrAutoProtectionPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#create BackupDrAutoProtectionPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#delete BackupDrAutoProtectionPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#update BackupDrAutoProtectionPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupDrAutoProtectionPolicyBackupPlanDetailsList <a name="BackupDrAutoProtectionPolicyBackupPlanDetailsList" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer"></a>

```python
from cdktn_provider_google import backup_dr_auto_protection_policy

backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BackupDrAutoProtectionPolicyBackupPlanDetails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>]

---


### BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference <a name="BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import backup_dr_auto_protection_policy

backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.backupPlanInput">backup_plan_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.backupPlan">backup_plan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_plan_input`<sup>Optional</sup> <a name="backup_plan_input" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.backupPlanInput"></a>

```python
backup_plan_input: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `backup_plan`<sup>Required</sup> <a name="backup_plan" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.backupPlan"></a>

```python
backup_plan: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BackupDrAutoProtectionPolicyBackupPlanDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>

---


### BackupDrAutoProtectionPolicyBindingSummaryList <a name="BackupDrAutoProtectionPolicyBindingSummaryList" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer"></a>

```python
from cdktn_provider_google import backup_dr_auto_protection_policy

backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BackupDrAutoProtectionPolicyBindingSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BackupDrAutoProtectionPolicyBindingSummaryOutputReference <a name="BackupDrAutoProtectionPolicyBindingSummaryOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer"></a>

```python
from cdktn_provider_google import backup_dr_auto_protection_policy

backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.projectCount">project_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummary">BackupDrAutoProtectionPolicyBindingSummary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `project_count`<sup>Required</sup> <a name="project_count" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.projectCount"></a>

```python
project_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.internalValue"></a>

```python
internal_value: BackupDrAutoProtectionPolicyBindingSummary
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummary">BackupDrAutoProtectionPolicyBindingSummary</a>

---


### BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference <a name="BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import backup_dr_auto_protection_policy

backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.internalValue"></a>

```python
internal_value: BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a>

---


### BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList <a name="BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer"></a>

```python
from cdktn_provider_google import backup_dr_auto_protection_policy

backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BackupDrAutoProtectionPolicyCriteriaMatchingConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>]

---


### BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference <a name="BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import backup_dr_auto_protection_policy

backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.putLabelCondition">put_label_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resetLabelCondition">reset_label_condition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_label_condition` <a name="put_label_condition" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.putLabelCondition"></a>

```python
def put_label_condition(
  key: str,
  values: typing.List[str]
) -> None
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.putLabelCondition.parameter.key"></a>

- *Type:* str

The key of the label to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#key BackupDrAutoProtectionPolicy#key}

---

###### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.putLabelCondition.parameter.values"></a>

- *Type:* typing.List[str]

The values of the label to match.

A resource matches the condition if its label
value is equal to any of the listed values. Currently, only one value is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#values BackupDrAutoProtectionPolicy#values}

---

##### `reset_label_condition` <a name="reset_label_condition" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resetLabelCondition"></a>

```python
def reset_label_condition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.labelCondition">label_condition</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.labelConditionInput">label_condition_input</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `label_condition`<sup>Required</sup> <a name="label_condition" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.labelCondition"></a>

```python
label_condition: BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference</a>

---

##### `label_condition_input`<sup>Optional</sup> <a name="label_condition_input" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.labelConditionInput"></a>

```python
label_condition_input: BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BackupDrAutoProtectionPolicyCriteriaMatchingConditions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>

---


### BackupDrAutoProtectionPolicyCriteriaOutputReference <a name="BackupDrAutoProtectionPolicyCriteriaOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer"></a>

```python
from cdktn_provider_google import backup_dr_auto_protection_policy

backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.putMatchingConditions">put_matching_conditions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_matching_conditions` <a name="put_matching_conditions" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.putMatchingConditions"></a>

```python
def put_matching_conditions(
  value: IResolvable | typing.List[BackupDrAutoProtectionPolicyCriteriaMatchingConditions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.putMatchingConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.matchingConditions">matching_conditions</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.matchingConditionsInput">matching_conditions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `matching_conditions`<sup>Required</sup> <a name="matching_conditions" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.matchingConditions"></a>

```python
matching_conditions: BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList</a>

---

##### `matching_conditions_input`<sup>Optional</sup> <a name="matching_conditions_input" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.matchingConditionsInput"></a>

```python
matching_conditions_input: IResolvable | typing.List[BackupDrAutoProtectionPolicyCriteriaMatchingConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: BackupDrAutoProtectionPolicyCriteria
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a>

---


### BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList <a name="BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer"></a>

```python
from cdktn_provider_google import backup_dr_auto_protection_policy

backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference <a name="BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer"></a>

```python
from cdktn_provider_google import backup_dr_auto_protection_policy

backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.failedResourceCount">failed_resource_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.matchingResourceCount">matching_resource_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.protectedResourceCount">protected_resource_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummary">BackupDrAutoProtectionPolicyPolicyEvaluationSummary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failed_resource_count`<sup>Required</sup> <a name="failed_resource_count" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.failedResourceCount"></a>

```python
failed_resource_count: str
```

- *Type:* str

---

##### `matching_resource_count`<sup>Required</sup> <a name="matching_resource_count" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.matchingResourceCount"></a>

```python
matching_resource_count: str
```

- *Type:* str

---

##### `protected_resource_count`<sup>Required</sup> <a name="protected_resource_count" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.protectedResourceCount"></a>

```python
protected_resource_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.internalValue"></a>

```python
internal_value: BackupDrAutoProtectionPolicyPolicyEvaluationSummary
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummary">BackupDrAutoProtectionPolicyPolicyEvaluationSummary</a>

---


### BackupDrAutoProtectionPolicyTimeoutsOutputReference <a name="BackupDrAutoProtectionPolicyTimeoutsOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import backup_dr_auto_protection_policy

backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts">BackupDrAutoProtectionPolicyTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BackupDrAutoProtectionPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts">BackupDrAutoProtectionPolicyTimeouts</a>

---



