# `cloudSecurityComplianceFramework` Submodule <a name="`cloudSecurityComplianceFramework` Submodule" id="@cdktn/provider-google.cloudSecurityComplianceFramework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudSecurityComplianceFramework <a name="CloudSecurityComplianceFramework" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework google_cloud_security_compliance_framework}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer"></a>

```python
from cdktn_provider_google import cloud_security_compliance_framework

cloudSecurityComplianceFramework.CloudSecurityComplianceFramework(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  framework_id: str,
  location: str,
  cloud_control_details: IResolvable | typing.List[CloudSecurityComplianceFrameworkCloudControlDetails] = None,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  organization: str = None,
  parent: str = None,
  timeouts: CloudSecurityComplianceFrameworkTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.frameworkId">framework_id</a></code> | <code>str</code> | ID of the framework. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.cloudControlDetails">cloud_control_details</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails">CloudSecurityComplianceFrameworkCloudControlDetails</a>]</code> | cloud_control_details block. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the framework. The maximum length is 2000 characters. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display name of the framework. The maximum length is 200 characters. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#id CloudSecurityComplianceFramework#id}. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.organization">organization</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The parent resource in which to create the resource. Must be in one of the following formats: * 'projects/{{project}}' * 'organizations/{{organization}}'. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts">CloudSecurityComplianceFrameworkTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `framework_id`<sup>Required</sup> <a name="framework_id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.frameworkId"></a>

- *Type:* str

ID of the framework.

This is not the full name of the framework.
This is the last part of the full name of the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#framework_id CloudSecurityComplianceFramework#framework_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#location CloudSecurityComplianceFramework#location}

---

##### `cloud_control_details`<sup>Optional</sup> <a name="cloud_control_details" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.cloudControlDetails"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails">CloudSecurityComplianceFrameworkCloudControlDetails</a>]

cloud_control_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#cloud_control_details CloudSecurityComplianceFramework#cloud_control_details}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#deletion_policy CloudSecurityComplianceFramework#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.description"></a>

- *Type:* str

The description of the framework. The maximum length is 2000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#description CloudSecurityComplianceFramework#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.displayName"></a>

- *Type:* str

Display name of the framework. The maximum length is 200 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#display_name CloudSecurityComplianceFramework#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#id CloudSecurityComplianceFramework#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.organization"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#organization CloudSecurityComplianceFramework#organization}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.parent"></a>

- *Type:* str

The parent resource in which to create the resource. Must be in one of the following formats: * 'projects/{{project}}' * 'organizations/{{organization}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#parent CloudSecurityComplianceFramework#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts">CloudSecurityComplianceFrameworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#timeouts CloudSecurityComplianceFramework#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.putCloudControlDetails">put_cloud_control_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetCloudControlDetails">reset_cloud_control_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetParent">reset_parent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cloud_control_details` <a name="put_cloud_control_details" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.putCloudControlDetails"></a>

```python
def put_cloud_control_details(
  value: IResolvable | typing.List[CloudSecurityComplianceFrameworkCloudControlDetails]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.putCloudControlDetails.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails">CloudSecurityComplianceFrameworkCloudControlDetails</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#create CloudSecurityComplianceFramework#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#delete CloudSecurityComplianceFramework#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#update CloudSecurityComplianceFramework#update}.

---

##### `reset_cloud_control_details` <a name="reset_cloud_control_details" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetCloudControlDetails"></a>

```python
def reset_cloud_control_details() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_parent` <a name="reset_parent" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetParent"></a>

```python
def reset_parent() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudSecurityComplianceFramework resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.isConstruct"></a>

```python
from cdktn_provider_google import cloud_security_compliance_framework

cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.isTerraformElement"></a>

```python
from cdktn_provider_google import cloud_security_compliance_framework

cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.isTerraformResource"></a>

```python
from cdktn_provider_google import cloud_security_compliance_framework

cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.generateConfigForImport"></a>

```python
from cdktn_provider_google import cloud_security_compliance_framework

cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudSecurityComplianceFramework resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudSecurityComplianceFramework to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudSecurityComplianceFramework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudSecurityComplianceFramework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.category">category</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.cloudControlDetails">cloud_control_details</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList">CloudSecurityComplianceFrameworkCloudControlDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.majorRevisionId">major_revision_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.supportedCloudProviders">supported_cloud_providers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.supportedEnforcementModes">supported_enforcement_modes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.supportedTargetResourceTypes">supported_target_resource_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference">CloudSecurityComplianceFrameworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.cloudControlDetailsInput">cloud_control_details_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails">CloudSecurityComplianceFrameworkCloudControlDetails</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.frameworkIdInput">framework_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts">CloudSecurityComplianceFrameworkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.frameworkId">framework_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.category"></a>

```python
category: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cloud_control_details`<sup>Required</sup> <a name="cloud_control_details" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.cloudControlDetails"></a>

```python
cloud_control_details: CloudSecurityComplianceFrameworkCloudControlDetailsList
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList">CloudSecurityComplianceFrameworkCloudControlDetailsList</a>

---

##### `major_revision_id`<sup>Required</sup> <a name="major_revision_id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.majorRevisionId"></a>

```python
major_revision_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `supported_cloud_providers`<sup>Required</sup> <a name="supported_cloud_providers" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.supportedCloudProviders"></a>

```python
supported_cloud_providers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_enforcement_modes`<sup>Required</sup> <a name="supported_enforcement_modes" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.supportedEnforcementModes"></a>

```python
supported_enforcement_modes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_target_resource_types`<sup>Required</sup> <a name="supported_target_resource_types" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.supportedTargetResourceTypes"></a>

```python
supported_target_resource_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.timeouts"></a>

```python
timeouts: CloudSecurityComplianceFrameworkTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference">CloudSecurityComplianceFrameworkTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `cloud_control_details_input`<sup>Optional</sup> <a name="cloud_control_details_input" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.cloudControlDetailsInput"></a>

```python
cloud_control_details_input: IResolvable | typing.List[CloudSecurityComplianceFrameworkCloudControlDetails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails">CloudSecurityComplianceFrameworkCloudControlDetails</a>]

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `framework_id_input`<sup>Optional</sup> <a name="framework_id_input" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.frameworkIdInput"></a>

```python
framework_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | CloudSecurityComplianceFrameworkTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts">CloudSecurityComplianceFrameworkTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `framework_id`<sup>Required</sup> <a name="framework_id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.frameworkId"></a>

```python
framework_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudSecurityComplianceFrameworkCloudControlDetails <a name="CloudSecurityComplianceFrameworkCloudControlDetails" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails.Initializer"></a>

```python
from cdktn_provider_google import cloud_security_compliance_framework

cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails(
  major_revision_id: str,
  name: str,
  parameters: IResolvable | typing.List[CloudSecurityComplianceFrameworkCloudControlDetailsParameters] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails.property.majorRevisionId">major_revision_id</a></code> | <code>str</code> | Major revision of cloudcontrol. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails.property.name">name</a></code> | <code>str</code> | The name of the CloudControl in the format: "{parent}/locations/{location}/cloudControls/{cloud-control}". |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters">CloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>]</code> | parameters block. |

---

##### `major_revision_id`<sup>Required</sup> <a name="major_revision_id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails.property.majorRevisionId"></a>

```python
major_revision_id: str
```

- *Type:* str

Major revision of cloudcontrol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#major_revision_id CloudSecurityComplianceFramework#major_revision_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the CloudControl in the format: "{parent}/locations/{location}/cloudControls/{cloud-control}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#name CloudSecurityComplianceFramework#name}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails.property.parameters"></a>

```python
parameters: IResolvable | typing.List[CloudSecurityComplianceFrameworkCloudControlDetailsParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters">CloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#parameters CloudSecurityComplianceFramework#parameters}

---

### CloudSecurityComplianceFrameworkCloudControlDetailsParameters <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParameters" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters.Initializer"></a>

```python
from cdktn_provider_google import cloud_security_compliance_framework

cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters(
  name: str,
  parameter_value: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters.property.name">name</a></code> | <code>str</code> | The name of the parameter. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters.property.parameterValue">parameter_value</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue</a></code> | parameter_value block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#name CloudSecurityComplianceFramework#name}

---

##### `parameter_value`<sup>Required</sup> <a name="parameter_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters.property.parameterValue"></a>

```python
parameter_value: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue</a>

parameter_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#parameter_value CloudSecurityComplianceFramework#parameter_value}

---

### CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.Initializer"></a>

```python
from cdktn_provider_google import cloud_security_compliance_framework

cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue(
  bool_value: bool | IResolvable = None,
  number_value: typing.Union[int, float] = None,
  oneof_value: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue = None,
  string_list_value: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.boolValue">bool_value</a></code> | <code>bool \| cdktn.IResolvable</code> | Represents a boolean value. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.numberValue">number_value</a></code> | <code>typing.Union[int, float]</code> | Represents a double value. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.oneofValue">oneof_value</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a></code> | oneof_value block. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.stringListValue">string_list_value</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a></code> | string_list_value block. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.stringValue">string_value</a></code> | <code>str</code> | Represents a string value. |

---

##### `bool_value`<sup>Optional</sup> <a name="bool_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.boolValue"></a>

```python
bool_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Represents a boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#bool_value CloudSecurityComplianceFramework#bool_value}

---

##### `number_value`<sup>Optional</sup> <a name="number_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.numberValue"></a>

```python
number_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Represents a double value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#number_value CloudSecurityComplianceFramework#number_value}

---

##### `oneof_value`<sup>Optional</sup> <a name="oneof_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.oneofValue"></a>

```python
oneof_value: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a>

oneof_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#oneof_value CloudSecurityComplianceFramework#oneof_value}

---

##### `string_list_value`<sup>Optional</sup> <a name="string_list_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.stringListValue"></a>

```python
string_list_value: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a>

string_list_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#string_list_value CloudSecurityComplianceFramework#string_list_value}

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

Represents a string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#string_value CloudSecurityComplianceFramework#string_value}

---

### CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue.Initializer"></a>

```python
from cdktn_provider_google import cloud_security_compliance_framework

cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue(
  name: str = None,
  parameter_value: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue.property.name">name</a></code> | <code>str</code> | The name of the parameter. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue.property.parameterValue">parameter_value</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a></code> | parameter_value block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#name CloudSecurityComplianceFramework#name}

---

##### `parameter_value`<sup>Optional</sup> <a name="parameter_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue.property.parameterValue"></a>

```python
parameter_value: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

parameter_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#parameter_value CloudSecurityComplianceFramework#parameter_value}

---

### CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.Initializer"></a>

```python
from cdktn_provider_google import cloud_security_compliance_framework

cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue(
  bool_value: bool | IResolvable = None,
  number_value: typing.Union[int, float] = None,
  string_list_value: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.boolValue">bool_value</a></code> | <code>bool \| cdktn.IResolvable</code> | Represents a boolean value. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.numberValue">number_value</a></code> | <code>typing.Union[int, float]</code> | Represents a double value. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringListValue">string_list_value</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a></code> | string_list_value block. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringValue">string_value</a></code> | <code>str</code> | Represents a string value. |

---

##### `bool_value`<sup>Optional</sup> <a name="bool_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.boolValue"></a>

```python
bool_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Represents a boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#bool_value CloudSecurityComplianceFramework#bool_value}

---

##### `number_value`<sup>Optional</sup> <a name="number_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.numberValue"></a>

```python
number_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Represents a double value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#number_value CloudSecurityComplianceFramework#number_value}

---

##### `string_list_value`<sup>Optional</sup> <a name="string_list_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringListValue"></a>

```python
string_list_value: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

string_list_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#string_list_value CloudSecurityComplianceFramework#string_list_value}

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

Represents a string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#string_value CloudSecurityComplianceFramework#string_value}

---

### CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue.Initializer"></a>

```python
from cdktn_provider_google import cloud_security_compliance_framework

cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue(
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue.property.values">values</a></code> | <code>typing.List[str]</code> | The strings in the list. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The strings in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#values CloudSecurityComplianceFramework#values}

---

### CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue.Initializer"></a>

```python
from cdktn_provider_google import cloud_security_compliance_framework

cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue(
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue.property.values">values</a></code> | <code>typing.List[str]</code> | The strings in the list. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The strings in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#values CloudSecurityComplianceFramework#values}

---

### CloudSecurityComplianceFrameworkConfig <a name="CloudSecurityComplianceFrameworkConfig" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.Initializer"></a>

```python
from cdktn_provider_google import cloud_security_compliance_framework

cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  framework_id: str,
  location: str,
  cloud_control_details: IResolvable | typing.List[CloudSecurityComplianceFrameworkCloudControlDetails] = None,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  organization: str = None,
  parent: str = None,
  timeouts: CloudSecurityComplianceFrameworkTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.frameworkId">framework_id</a></code> | <code>str</code> | ID of the framework. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.cloudControlDetails">cloud_control_details</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails">CloudSecurityComplianceFrameworkCloudControlDetails</a>]</code> | cloud_control_details block. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.description">description</a></code> | <code>str</code> | The description of the framework. The maximum length is 2000 characters. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.displayName">display_name</a></code> | <code>str</code> | Display name of the framework. The maximum length is 200 characters. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#id CloudSecurityComplianceFramework#id}. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.organization">organization</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.parent">parent</a></code> | <code>str</code> | The parent resource in which to create the resource. Must be in one of the following formats: * 'projects/{{project}}' * 'organizations/{{organization}}'. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts">CloudSecurityComplianceFrameworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `framework_id`<sup>Required</sup> <a name="framework_id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.frameworkId"></a>

```python
framework_id: str
```

- *Type:* str

ID of the framework.

This is not the full name of the framework.
This is the last part of the full name of the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#framework_id CloudSecurityComplianceFramework#framework_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#location CloudSecurityComplianceFramework#location}

---

##### `cloud_control_details`<sup>Optional</sup> <a name="cloud_control_details" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.cloudControlDetails"></a>

```python
cloud_control_details: IResolvable | typing.List[CloudSecurityComplianceFrameworkCloudControlDetails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails">CloudSecurityComplianceFrameworkCloudControlDetails</a>]

cloud_control_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#cloud_control_details CloudSecurityComplianceFramework#cloud_control_details}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#deletion_policy CloudSecurityComplianceFramework#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the framework. The maximum length is 2000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#description CloudSecurityComplianceFramework#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name of the framework. The maximum length is 200 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#display_name CloudSecurityComplianceFramework#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#id CloudSecurityComplianceFramework#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#organization CloudSecurityComplianceFramework#organization}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The parent resource in which to create the resource. Must be in one of the following formats: * 'projects/{{project}}' * 'organizations/{{organization}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#parent CloudSecurityComplianceFramework#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.timeouts"></a>

```python
timeouts: CloudSecurityComplianceFrameworkTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts">CloudSecurityComplianceFrameworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#timeouts CloudSecurityComplianceFramework#timeouts}

---

### CloudSecurityComplianceFrameworkTimeouts <a name="CloudSecurityComplianceFrameworkTimeouts" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts.Initializer"></a>

```python
from cdktn_provider_google import cloud_security_compliance_framework

cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#create CloudSecurityComplianceFramework#create}. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#delete CloudSecurityComplianceFramework#delete}. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#update CloudSecurityComplianceFramework#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#create CloudSecurityComplianceFramework#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#delete CloudSecurityComplianceFramework#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#update CloudSecurityComplianceFramework#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudSecurityComplianceFrameworkCloudControlDetailsList <a name="CloudSecurityComplianceFrameworkCloudControlDetailsList" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer"></a>

```python
from cdktn_provider_google import cloud_security_compliance_framework

cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails">CloudSecurityComplianceFrameworkCloudControlDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudSecurityComplianceFrameworkCloudControlDetails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails">CloudSecurityComplianceFrameworkCloudControlDetails</a>]

---


### CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference <a name="CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import cloud_security_compliance_framework

cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameters` <a name="put_parameters" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.putParameters"></a>

```python
def put_parameters(
  value: IResolvable | typing.List[CloudSecurityComplianceFrameworkCloudControlDetailsParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters">CloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>]

---

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList">CloudSecurityComplianceFrameworkCloudControlDetailsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.majorRevisionIdInput">major_revision_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.parametersInput">parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters">CloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.majorRevisionId">major_revision_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails">CloudSecurityComplianceFrameworkCloudControlDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.parameters"></a>

```python
parameters: CloudSecurityComplianceFrameworkCloudControlDetailsParametersList
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList">CloudSecurityComplianceFrameworkCloudControlDetailsParametersList</a>

---

##### `major_revision_id_input`<sup>Optional</sup> <a name="major_revision_id_input" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.majorRevisionIdInput"></a>

```python
major_revision_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.parametersInput"></a>

```python
parameters_input: IResolvable | typing.List[CloudSecurityComplianceFrameworkCloudControlDetailsParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters">CloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>]

---

##### `major_revision_id`<sup>Required</sup> <a name="major_revision_id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.majorRevisionId"></a>

```python
major_revision_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudSecurityComplianceFrameworkCloudControlDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails">CloudSecurityComplianceFrameworkCloudControlDetails</a>

---


### CloudSecurityComplianceFrameworkCloudControlDetailsParametersList <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersList" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer"></a>

```python
from cdktn_provider_google import cloud_security_compliance_framework

cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters">CloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudSecurityComplianceFrameworkCloudControlDetailsParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters">CloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>]

---


### CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_google import cloud_security_compliance_framework

cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.putParameterValue">put_parameter_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameter_value` <a name="put_parameter_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.putParameterValue"></a>

```python
def put_parameter_value(
  bool_value: bool | IResolvable = None,
  number_value: typing.Union[int, float] = None,
  oneof_value: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue = None,
  string_list_value: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue = None,
  string_value: str = None
) -> None
```

###### `bool_value`<sup>Optional</sup> <a name="bool_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.putParameterValue.parameter.boolValue"></a>

- *Type:* bool | cdktn.IResolvable

Represents a boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#bool_value CloudSecurityComplianceFramework#bool_value}

---

###### `number_value`<sup>Optional</sup> <a name="number_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.putParameterValue.parameter.numberValue"></a>

- *Type:* typing.Union[int, float]

Represents a double value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#number_value CloudSecurityComplianceFramework#number_value}

---

###### `oneof_value`<sup>Optional</sup> <a name="oneof_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.putParameterValue.parameter.oneofValue"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a>

oneof_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#oneof_value CloudSecurityComplianceFramework#oneof_value}

---

###### `string_list_value`<sup>Optional</sup> <a name="string_list_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.putParameterValue.parameter.stringListValue"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a>

string_list_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#string_list_value CloudSecurityComplianceFramework#string_list_value}

---

###### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.putParameterValue.parameter.stringValue"></a>

- *Type:* str

Represents a string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#string_value CloudSecurityComplianceFramework#string_value}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.parameterValue">parameter_value</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.parameterValueInput">parameter_value_input</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters">CloudSecurityComplianceFrameworkCloudControlDetailsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter_value`<sup>Required</sup> <a name="parameter_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.parameterValue"></a>

```python
parameter_value: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameter_value_input`<sup>Optional</sup> <a name="parameter_value_input" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.parameterValueInput"></a>

```python
parameter_value_input: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudSecurityComplianceFrameworkCloudControlDetailsParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters">CloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>

---


### CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer"></a>

```python
from cdktn_provider_google import cloud_security_compliance_framework

cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue">put_parameter_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetParameterValue">reset_parameter_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameter_value` <a name="put_parameter_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue"></a>

```python
def put_parameter_value(
  bool_value: bool | IResolvable = None,
  number_value: typing.Union[int, float] = None,
  string_list_value: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue = None,
  string_value: str = None
) -> None
```

###### `bool_value`<sup>Optional</sup> <a name="bool_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue.parameter.boolValue"></a>

- *Type:* bool | cdktn.IResolvable

Represents a boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#bool_value CloudSecurityComplianceFramework#bool_value}

---

###### `number_value`<sup>Optional</sup> <a name="number_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue.parameter.numberValue"></a>

- *Type:* typing.Union[int, float]

Represents a double value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#number_value CloudSecurityComplianceFramework#number_value}

---

###### `string_list_value`<sup>Optional</sup> <a name="string_list_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue.parameter.stringListValue"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

string_list_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#string_list_value CloudSecurityComplianceFramework#string_list_value}

---

###### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue.parameter.stringValue"></a>

- *Type:* str

Represents a string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#string_value CloudSecurityComplianceFramework#string_value}

---

##### `reset_name` <a name="reset_name" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_parameter_value` <a name="reset_parameter_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetParameterValue"></a>

```python
def reset_parameter_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValue">parameter_value</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValueInput">parameter_value_input</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter_value`<sup>Required</sup> <a name="parameter_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValue"></a>

```python
parameter_value: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameter_value_input`<sup>Optional</sup> <a name="parameter_value_input" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValueInput"></a>

```python
parameter_value_input: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.internalValue"></a>

```python
internal_value: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a>

---


### CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer"></a>

```python
from cdktn_provider_google import cloud_security_compliance_framework

cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.putStringListValue">put_string_list_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetBoolValue">reset_bool_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetNumberValue">reset_number_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringListValue">reset_string_list_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_string_list_value` <a name="put_string_list_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.putStringListValue"></a>

```python
def put_string_list_value(
  values: typing.List[str]
) -> None
```

###### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.putStringListValue.parameter.values"></a>

- *Type:* typing.List[str]

The strings in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#values CloudSecurityComplianceFramework#values}

---

##### `reset_bool_value` <a name="reset_bool_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetBoolValue"></a>

```python
def reset_bool_value() -> None
```

##### `reset_number_value` <a name="reset_number_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetNumberValue"></a>

```python
def reset_number_value() -> None
```

##### `reset_string_list_value` <a name="reset_string_list_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringListValue"></a>

```python
def reset_string_list_value() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValue">string_list_value</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValueInput">bool_value_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValueInput">number_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValueInput">string_list_value_input</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValue">bool_value</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValue">number_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `string_list_value`<sup>Required</sup> <a name="string_list_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValue"></a>

```python
string_list_value: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference</a>

---

##### `bool_value_input`<sup>Optional</sup> <a name="bool_value_input" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValueInput"></a>

```python
bool_value_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `number_value_input`<sup>Optional</sup> <a name="number_value_input" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValueInput"></a>

```python
number_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_list_value_input`<sup>Optional</sup> <a name="string_list_value_input" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValueInput"></a>

```python
string_list_value_input: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `bool_value`<sup>Required</sup> <a name="bool_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValue"></a>

```python
bool_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `number_value`<sup>Required</sup> <a name="number_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValue"></a>

```python
number_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.internalValue"></a>

```python
internal_value: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

---


### CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer"></a>

```python
from cdktn_provider_google import cloud_security_compliance_framework

cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.internalValue"></a>

```python
internal_value: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

---


### CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.Initializer"></a>

```python
from cdktn_provider_google import cloud_security_compliance_framework

cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.putOneofValue">put_oneof_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.putStringListValue">put_string_list_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetBoolValue">reset_bool_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetNumberValue">reset_number_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetOneofValue">reset_oneof_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetStringListValue">reset_string_list_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_oneof_value` <a name="put_oneof_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.putOneofValue"></a>

```python
def put_oneof_value(
  name: str = None,
  parameter_value: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.putOneofValue.parameter.name"></a>

- *Type:* str

The name of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#name CloudSecurityComplianceFramework#name}

---

###### `parameter_value`<sup>Optional</sup> <a name="parameter_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.putOneofValue.parameter.parameterValue"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

parameter_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#parameter_value CloudSecurityComplianceFramework#parameter_value}

---

##### `put_string_list_value` <a name="put_string_list_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.putStringListValue"></a>

```python
def put_string_list_value(
  values: typing.List[str]
) -> None
```

###### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.putStringListValue.parameter.values"></a>

- *Type:* typing.List[str]

The strings in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/cloud_security_compliance_framework#values CloudSecurityComplianceFramework#values}

---

##### `reset_bool_value` <a name="reset_bool_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetBoolValue"></a>

```python
def reset_bool_value() -> None
```

##### `reset_number_value` <a name="reset_number_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetNumberValue"></a>

```python
def reset_number_value() -> None
```

##### `reset_oneof_value` <a name="reset_oneof_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetOneofValue"></a>

```python
def reset_oneof_value() -> None
```

##### `reset_string_list_value` <a name="reset_string_list_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetStringListValue"></a>

```python
def reset_string_list_value() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.oneofValue">oneof_value</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringListValue">string_list_value</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.boolValueInput">bool_value_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.numberValueInput">number_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.oneofValueInput">oneof_value_input</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringListValueInput">string_list_value_input</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.boolValue">bool_value</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.numberValue">number_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `oneof_value`<sup>Required</sup> <a name="oneof_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.oneofValue"></a>

```python
oneof_value: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference</a>

---

##### `string_list_value`<sup>Required</sup> <a name="string_list_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringListValue"></a>

```python
string_list_value: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference</a>

---

##### `bool_value_input`<sup>Optional</sup> <a name="bool_value_input" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.boolValueInput"></a>

```python
bool_value_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `number_value_input`<sup>Optional</sup> <a name="number_value_input" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.numberValueInput"></a>

```python
number_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `oneof_value_input`<sup>Optional</sup> <a name="oneof_value_input" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.oneofValueInput"></a>

```python
oneof_value_input: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a>

---

##### `string_list_value_input`<sup>Optional</sup> <a name="string_list_value_input" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringListValueInput"></a>

```python
string_list_value_input: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a>

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `bool_value`<sup>Required</sup> <a name="bool_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.boolValue"></a>

```python
bool_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `number_value`<sup>Required</sup> <a name="number_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.numberValue"></a>

```python
number_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.internalValue"></a>

```python
internal_value: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue</a>

---


### CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer"></a>

```python
from cdktn_provider_google import cloud_security_compliance_framework

cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.internalValue"></a>

```python
internal_value: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a>

---


### CloudSecurityComplianceFrameworkTimeoutsOutputReference <a name="CloudSecurityComplianceFrameworkTimeoutsOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import cloud_security_compliance_framework

cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts">CloudSecurityComplianceFrameworkTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudSecurityComplianceFrameworkTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts">CloudSecurityComplianceFrameworkTimeouts</a>

---



