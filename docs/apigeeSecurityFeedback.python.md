# `apigeeSecurityFeedback` Submodule <a name="`apigeeSecurityFeedback` Submodule" id="@cdktn/provider-google.apigeeSecurityFeedback"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeSecurityFeedback <a name="ApigeeSecurityFeedback" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback google_apigee_security_feedback}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer"></a>

```python
from cdktn_provider_google import apigee_security_feedback

apigeeSecurityFeedback.ApigeeSecurityFeedback(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  feedback_contexts: IResolvable | typing.List[ApigeeSecurityFeedbackFeedbackContexts],
  feedback_id: str,
  feedback_type: str,
  org_id: str,
  comment: str = None,
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  reason: str = None,
  timeouts: ApigeeSecurityFeedbackTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.feedbackContexts">feedback_contexts</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts">ApigeeSecurityFeedbackFeedbackContexts</a>]</code> | feedback_contexts block. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.feedbackId">feedback_id</a></code> | <code>str</code> | Resource ID of the security feedback. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.feedbackType">feedback_type</a></code> | <code>str</code> | The type of feedback being submitted. Possible values: ["EXCLUDED_DETECTION"]. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | The Apigee Organization associated with the Apigee Security Feedback, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Optional text the user can provide for additional, unstructured context. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the feedback. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback#id ApigeeSecurityFeedback#id}. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.reason">reason</a></code> | <code>str</code> | The reason for the feedback. Possible values: ["INTERNAL_SYSTEM", "NON_RISK_CLIENT", "NAT", "PENETRATION_TEST", "OTHER"]. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts">ApigeeSecurityFeedbackTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `feedback_contexts`<sup>Required</sup> <a name="feedback_contexts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.feedbackContexts"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts">ApigeeSecurityFeedbackFeedbackContexts</a>]

feedback_contexts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback#feedback_contexts ApigeeSecurityFeedback#feedback_contexts}

---

##### `feedback_id`<sup>Required</sup> <a name="feedback_id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.feedbackId"></a>

- *Type:* str

Resource ID of the security feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback#feedback_id ApigeeSecurityFeedback#feedback_id}

---

##### `feedback_type`<sup>Required</sup> <a name="feedback_type" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.feedbackType"></a>

- *Type:* str

The type of feedback being submitted. Possible values: ["EXCLUDED_DETECTION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback#feedback_type ApigeeSecurityFeedback#feedback_type}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.orgId"></a>

- *Type:* str

The Apigee Organization associated with the Apigee Security Feedback, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback#org_id ApigeeSecurityFeedback#org_id}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.comment"></a>

- *Type:* str

Optional text the user can provide for additional, unstructured context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback#comment ApigeeSecurityFeedback#comment}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback#deletion_policy ApigeeSecurityFeedback#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback#display_name ApigeeSecurityFeedback#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback#id ApigeeSecurityFeedback#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reason`<sup>Optional</sup> <a name="reason" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.reason"></a>

- *Type:* str

The reason for the feedback. Possible values: ["INTERNAL_SYSTEM", "NON_RISK_CLIENT", "NAT", "PENETRATION_TEST", "OTHER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback#reason ApigeeSecurityFeedback#reason}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts">ApigeeSecurityFeedbackTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback#timeouts ApigeeSecurityFeedback#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.putFeedbackContexts">put_feedback_contexts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetReason">reset_reason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_feedback_contexts` <a name="put_feedback_contexts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.putFeedbackContexts"></a>

```python
def put_feedback_contexts(
  value: IResolvable | typing.List[ApigeeSecurityFeedbackFeedbackContexts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.putFeedbackContexts.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts">ApigeeSecurityFeedbackFeedbackContexts</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback#create ApigeeSecurityFeedback#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback#delete ApigeeSecurityFeedback#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback#update ApigeeSecurityFeedback#update}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_reason` <a name="reset_reason" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetReason"></a>

```python
def reset_reason() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApigeeSecurityFeedback resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isConstruct"></a>

```python
from cdktn_provider_google import apigee_security_feedback

apigeeSecurityFeedback.ApigeeSecurityFeedback.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isTerraformElement"></a>

```python
from cdktn_provider_google import apigee_security_feedback

apigeeSecurityFeedback.ApigeeSecurityFeedback.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isTerraformResource"></a>

```python
from cdktn_provider_google import apigee_security_feedback

apigeeSecurityFeedback.ApigeeSecurityFeedback.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.generateConfigForImport"></a>

```python
from cdktn_provider_google import apigee_security_feedback

apigeeSecurityFeedback.ApigeeSecurityFeedback.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApigeeSecurityFeedback resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApigeeSecurityFeedback to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApigeeSecurityFeedback that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApigeeSecurityFeedback to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackContexts">feedback_contexts</a></code> | <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList">ApigeeSecurityFeedbackFeedbackContextsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference">ApigeeSecurityFeedbackTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackContextsInput">feedback_contexts_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts">ApigeeSecurityFeedbackFeedbackContexts</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackIdInput">feedback_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackTypeInput">feedback_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.reasonInput">reason_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts">ApigeeSecurityFeedbackTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackId">feedback_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackType">feedback_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.reason">reason</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `feedback_contexts`<sup>Required</sup> <a name="feedback_contexts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackContexts"></a>

```python
feedback_contexts: ApigeeSecurityFeedbackFeedbackContextsList
```

- *Type:* <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList">ApigeeSecurityFeedbackFeedbackContextsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.timeouts"></a>

```python
timeouts: ApigeeSecurityFeedbackTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference">ApigeeSecurityFeedbackTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `feedback_contexts_input`<sup>Optional</sup> <a name="feedback_contexts_input" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackContextsInput"></a>

```python
feedback_contexts_input: IResolvable | typing.List[ApigeeSecurityFeedbackFeedbackContexts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts">ApigeeSecurityFeedbackFeedbackContexts</a>]

---

##### `feedback_id_input`<sup>Optional</sup> <a name="feedback_id_input" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackIdInput"></a>

```python
feedback_id_input: str
```

- *Type:* str

---

##### `feedback_type_input`<sup>Optional</sup> <a name="feedback_type_input" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackTypeInput"></a>

```python
feedback_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `reason_input`<sup>Optional</sup> <a name="reason_input" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.reasonInput"></a>

```python
reason_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ApigeeSecurityFeedbackTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts">ApigeeSecurityFeedbackTimeouts</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `feedback_id`<sup>Required</sup> <a name="feedback_id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackId"></a>

```python
feedback_id: str
```

- *Type:* str

---

##### `feedback_type`<sup>Required</sup> <a name="feedback_type" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackType"></a>

```python
feedback_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeSecurityFeedbackConfig <a name="ApigeeSecurityFeedbackConfig" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.Initializer"></a>

```python
from cdktn_provider_google import apigee_security_feedback

apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  feedback_contexts: IResolvable | typing.List[ApigeeSecurityFeedbackFeedbackContexts],
  feedback_id: str,
  feedback_type: str,
  org_id: str,
  comment: str = None,
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  reason: str = None,
  timeouts: ApigeeSecurityFeedbackTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.feedbackContexts">feedback_contexts</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts">ApigeeSecurityFeedbackFeedbackContexts</a>]</code> | feedback_contexts block. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.feedbackId">feedback_id</a></code> | <code>str</code> | Resource ID of the security feedback. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.feedbackType">feedback_type</a></code> | <code>str</code> | The type of feedback being submitted. Possible values: ["EXCLUDED_DETECTION"]. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.orgId">org_id</a></code> | <code>str</code> | The Apigee Organization associated with the Apigee Security Feedback, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.comment">comment</a></code> | <code>str</code> | Optional text the user can provide for additional, unstructured context. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the feedback. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback#id ApigeeSecurityFeedback#id}. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.reason">reason</a></code> | <code>str</code> | The reason for the feedback. Possible values: ["INTERNAL_SYSTEM", "NON_RISK_CLIENT", "NAT", "PENETRATION_TEST", "OTHER"]. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts">ApigeeSecurityFeedbackTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `feedback_contexts`<sup>Required</sup> <a name="feedback_contexts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.feedbackContexts"></a>

```python
feedback_contexts: IResolvable | typing.List[ApigeeSecurityFeedbackFeedbackContexts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts">ApigeeSecurityFeedbackFeedbackContexts</a>]

feedback_contexts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback#feedback_contexts ApigeeSecurityFeedback#feedback_contexts}

---

##### `feedback_id`<sup>Required</sup> <a name="feedback_id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.feedbackId"></a>

```python
feedback_id: str
```

- *Type:* str

Resource ID of the security feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback#feedback_id ApigeeSecurityFeedback#feedback_id}

---

##### `feedback_type`<sup>Required</sup> <a name="feedback_type" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.feedbackType"></a>

```python
feedback_type: str
```

- *Type:* str

The type of feedback being submitted. Possible values: ["EXCLUDED_DETECTION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback#feedback_type ApigeeSecurityFeedback#feedback_type}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

The Apigee Organization associated with the Apigee Security Feedback, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback#org_id ApigeeSecurityFeedback#org_id}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Optional text the user can provide for additional, unstructured context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback#comment ApigeeSecurityFeedback#comment}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback#deletion_policy ApigeeSecurityFeedback#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback#display_name ApigeeSecurityFeedback#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback#id ApigeeSecurityFeedback#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reason`<sup>Optional</sup> <a name="reason" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.reason"></a>

```python
reason: str
```

- *Type:* str

The reason for the feedback. Possible values: ["INTERNAL_SYSTEM", "NON_RISK_CLIENT", "NAT", "PENETRATION_TEST", "OTHER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback#reason ApigeeSecurityFeedback#reason}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.timeouts"></a>

```python
timeouts: ApigeeSecurityFeedbackTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts">ApigeeSecurityFeedbackTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback#timeouts ApigeeSecurityFeedback#timeouts}

---

### ApigeeSecurityFeedbackFeedbackContexts <a name="ApigeeSecurityFeedbackFeedbackContexts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts.Initializer"></a>

```python
from cdktn_provider_google import apigee_security_feedback

apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts(
  attribute: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts.property.attribute">attribute</a></code> | <code>str</code> | The attribute the user is providing feedback about. Possible values: ["ATTRIBUTE_ENVIRONMENTS", "ATTRIBUTE_IP_ADDRESS_RANGES"]. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts.property.values">values</a></code> | <code>typing.List[str]</code> | The values of the attribute the user is providing feedback about, separated by commas. |

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

The attribute the user is providing feedback about. Possible values: ["ATTRIBUTE_ENVIRONMENTS", "ATTRIBUTE_IP_ADDRESS_RANGES"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback#attribute ApigeeSecurityFeedback#attribute}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The values of the attribute the user is providing feedback about, separated by commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback#values ApigeeSecurityFeedback#values}

---

### ApigeeSecurityFeedbackTimeouts <a name="ApigeeSecurityFeedbackTimeouts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts.Initializer"></a>

```python
from cdktn_provider_google import apigee_security_feedback

apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback#create ApigeeSecurityFeedback#create}. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback#delete ApigeeSecurityFeedback#delete}. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback#update ApigeeSecurityFeedback#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback#create ApigeeSecurityFeedback#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback#delete ApigeeSecurityFeedback#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_security_feedback#update ApigeeSecurityFeedback#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeSecurityFeedbackFeedbackContextsList <a name="ApigeeSecurityFeedbackFeedbackContextsList" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.Initializer"></a>

```python
from cdktn_provider_google import apigee_security_feedback

apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigeeSecurityFeedbackFeedbackContextsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts">ApigeeSecurityFeedbackFeedbackContexts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApigeeSecurityFeedbackFeedbackContexts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts">ApigeeSecurityFeedbackFeedbackContexts</a>]

---


### ApigeeSecurityFeedbackFeedbackContextsOutputReference <a name="ApigeeSecurityFeedbackFeedbackContextsOutputReference" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import apigee_security_feedback

apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.attributeInput">attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts">ApigeeSecurityFeedbackFeedbackContexts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_input`<sup>Optional</sup> <a name="attribute_input" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.attributeInput"></a>

```python
attribute_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApigeeSecurityFeedbackFeedbackContexts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts">ApigeeSecurityFeedbackFeedbackContexts</a>

---


### ApigeeSecurityFeedbackTimeoutsOutputReference <a name="ApigeeSecurityFeedbackTimeoutsOutputReference" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import apigee_security_feedback

apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts">ApigeeSecurityFeedbackTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApigeeSecurityFeedbackTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts">ApigeeSecurityFeedbackTimeouts</a>

---



