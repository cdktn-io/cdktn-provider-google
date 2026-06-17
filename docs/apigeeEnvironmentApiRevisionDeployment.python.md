# `apigeeEnvironmentApiRevisionDeployment` Submodule <a name="`apigeeEnvironmentApiRevisionDeployment` Submodule" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeEnvironmentApiRevisionDeployment <a name="ApigeeEnvironmentApiRevisionDeployment" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment google_apigee_environment_api_revision_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer"></a>

```python
from cdktn_provider_google import apigee_environment_api_revision_deployment

apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api: str,
  environment: str,
  org_id: str,
  revision: typing.Union[int, float],
  deletion_policy: str = None,
  id: str = None,
  override: bool | IResolvable = None,
  sequenced_rollout: bool | IResolvable = None,
  service_account: str = None,
  timeouts: ApigeeEnvironmentApiRevisionDeploymentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.api">api</a></code> | <code>str</code> | Apigee API proxy name. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.environment">environment</a></code> | <code>str</code> | Apigee environment name. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | Apigee organization ID. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.revision">revision</a></code> | <code>typing.Union[int, float]</code> | API proxy revision number to deploy. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#id ApigeeEnvironmentApiRevisionDeployment#id}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.override">override</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, replaces other deployed revisions of this proxy in the environment. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.sequencedRollout">sequenced_rollout</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, enables sequenced rollout for safe traffic switching. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.serviceAccount">service_account</a></code> | <code>str</code> | Optional service account the deployed proxy runs as. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts">ApigeeEnvironmentApiRevisionDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.api"></a>

- *Type:* str

Apigee API proxy name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#api ApigeeEnvironmentApiRevisionDeployment#api}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.environment"></a>

- *Type:* str

Apigee environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#environment ApigeeEnvironmentApiRevisionDeployment#environment}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.orgId"></a>

- *Type:* str

Apigee organization ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#org_id ApigeeEnvironmentApiRevisionDeployment#org_id}

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.revision"></a>

- *Type:* typing.Union[int, float]

API proxy revision number to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#revision ApigeeEnvironmentApiRevisionDeployment#revision}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#deletion_policy ApigeeEnvironmentApiRevisionDeployment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#id ApigeeEnvironmentApiRevisionDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `override`<sup>Optional</sup> <a name="override" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.override"></a>

- *Type:* bool | cdktn.IResolvable

If true, replaces other deployed revisions of this proxy in the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#override ApigeeEnvironmentApiRevisionDeployment#override}

---

##### `sequenced_rollout`<sup>Optional</sup> <a name="sequenced_rollout" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.sequencedRollout"></a>

- *Type:* bool | cdktn.IResolvable

If true, enables sequenced rollout for safe traffic switching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#sequenced_rollout ApigeeEnvironmentApiRevisionDeployment#sequenced_rollout}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.serviceAccount"></a>

- *Type:* str

Optional service account the deployed proxy runs as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#service_account ApigeeEnvironmentApiRevisionDeployment#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts">ApigeeEnvironmentApiRevisionDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#timeouts ApigeeEnvironmentApiRevisionDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetOverride">reset_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetSequencedRollout">reset_sequenced_rollout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#create ApigeeEnvironmentApiRevisionDeployment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#delete ApigeeEnvironmentApiRevisionDeployment#delete}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_override` <a name="reset_override" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetOverride"></a>

```python
def reset_override() -> None
```

##### `reset_sequenced_rollout` <a name="reset_sequenced_rollout" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetSequencedRollout"></a>

```python
def reset_sequenced_rollout() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApigeeEnvironmentApiRevisionDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isConstruct"></a>

```python
from cdktn_provider_google import apigee_environment_api_revision_deployment

apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isTerraformElement"></a>

```python
from cdktn_provider_google import apigee_environment_api_revision_deployment

apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isTerraformResource"></a>

```python
from cdktn_provider_google import apigee_environment_api_revision_deployment

apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.generateConfigForImport"></a>

```python
from cdktn_provider_google import apigee_environment_api_revision_deployment

apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApigeeEnvironmentApiRevisionDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApigeeEnvironmentApiRevisionDeployment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApigeeEnvironmentApiRevisionDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApigeeEnvironmentApiRevisionDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.basepaths">basepaths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.deployStartTime">deploy_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference">ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.apiInput">api_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.overrideInput">override_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.revisionInput">revision_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.sequencedRolloutInput">sequenced_rollout_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts">ApigeeEnvironmentApiRevisionDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.api">api</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.override">override</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.revision">revision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.sequencedRollout">sequenced_rollout</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `basepaths`<sup>Required</sup> <a name="basepaths" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.basepaths"></a>

```python
basepaths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deploy_start_time`<sup>Required</sup> <a name="deploy_start_time" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.deployStartTime"></a>

```python
deploy_start_time: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.timeouts"></a>

```python
timeouts: ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference">ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference</a>

---

##### `api_input`<sup>Optional</sup> <a name="api_input" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.apiInput"></a>

```python
api_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `override_input`<sup>Optional</sup> <a name="override_input" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.overrideInput"></a>

```python
override_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `revision_input`<sup>Optional</sup> <a name="revision_input" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.revisionInput"></a>

```python
revision_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sequenced_rollout_input`<sup>Optional</sup> <a name="sequenced_rollout_input" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.sequencedRolloutInput"></a>

```python
sequenced_rollout_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ApigeeEnvironmentApiRevisionDeploymentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts">ApigeeEnvironmentApiRevisionDeploymentTimeouts</a>

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.api"></a>

```python
api: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.override"></a>

```python
override: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.revision"></a>

```python
revision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sequenced_rollout`<sup>Required</sup> <a name="sequenced_rollout" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.sequencedRollout"></a>

```python
sequenced_rollout: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeEnvironmentApiRevisionDeploymentConfig <a name="ApigeeEnvironmentApiRevisionDeploymentConfig" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.Initializer"></a>

```python
from cdktn_provider_google import apigee_environment_api_revision_deployment

apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api: str,
  environment: str,
  org_id: str,
  revision: typing.Union[int, float],
  deletion_policy: str = None,
  id: str = None,
  override: bool | IResolvable = None,
  sequenced_rollout: bool | IResolvable = None,
  service_account: str = None,
  timeouts: ApigeeEnvironmentApiRevisionDeploymentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.api">api</a></code> | <code>str</code> | Apigee API proxy name. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.environment">environment</a></code> | <code>str</code> | Apigee environment name. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.orgId">org_id</a></code> | <code>str</code> | Apigee organization ID. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.revision">revision</a></code> | <code>typing.Union[int, float]</code> | API proxy revision number to deploy. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#id ApigeeEnvironmentApiRevisionDeployment#id}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.override">override</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, replaces other deployed revisions of this proxy in the environment. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.sequencedRollout">sequenced_rollout</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, enables sequenced rollout for safe traffic switching. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | Optional service account the deployed proxy runs as. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts">ApigeeEnvironmentApiRevisionDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.api"></a>

```python
api: str
```

- *Type:* str

Apigee API proxy name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#api ApigeeEnvironmentApiRevisionDeployment#api}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.environment"></a>

```python
environment: str
```

- *Type:* str

Apigee environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#environment ApigeeEnvironmentApiRevisionDeployment#environment}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

Apigee organization ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#org_id ApigeeEnvironmentApiRevisionDeployment#org_id}

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.revision"></a>

```python
revision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

API proxy revision number to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#revision ApigeeEnvironmentApiRevisionDeployment#revision}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#deletion_policy ApigeeEnvironmentApiRevisionDeployment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#id ApigeeEnvironmentApiRevisionDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `override`<sup>Optional</sup> <a name="override" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.override"></a>

```python
override: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, replaces other deployed revisions of this proxy in the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#override ApigeeEnvironmentApiRevisionDeployment#override}

---

##### `sequenced_rollout`<sup>Optional</sup> <a name="sequenced_rollout" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.sequencedRollout"></a>

```python
sequenced_rollout: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, enables sequenced rollout for safe traffic switching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#sequenced_rollout ApigeeEnvironmentApiRevisionDeployment#sequenced_rollout}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Optional service account the deployed proxy runs as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#service_account ApigeeEnvironmentApiRevisionDeployment#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.timeouts"></a>

```python
timeouts: ApigeeEnvironmentApiRevisionDeploymentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts">ApigeeEnvironmentApiRevisionDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#timeouts ApigeeEnvironmentApiRevisionDeployment#timeouts}

---

### ApigeeEnvironmentApiRevisionDeploymentTimeouts <a name="ApigeeEnvironmentApiRevisionDeploymentTimeouts" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts.Initializer"></a>

```python
from cdktn_provider_google import apigee_environment_api_revision_deployment

apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#create ApigeeEnvironmentApiRevisionDeployment#create}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#delete ApigeeEnvironmentApiRevisionDeployment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#create ApigeeEnvironmentApiRevisionDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#delete ApigeeEnvironmentApiRevisionDeployment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference <a name="ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import apigee_environment_api_revision_deployment

apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts">ApigeeEnvironmentApiRevisionDeploymentTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApigeeEnvironmentApiRevisionDeploymentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts">ApigeeEnvironmentApiRevisionDeploymentTimeouts</a>

---



