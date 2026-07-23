# `apigeeApiDeployment` Submodule <a name="`apigeeApiDeployment` Submodule" id="@cdktn/provider-google.apigeeApiDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeApiDeployment <a name="ApigeeApiDeployment" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_api_deployment google_apigee_api_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.Initializer"></a>

```python
from cdktn_provider_google import apigee_api_deployment

apigeeApiDeployment.ApigeeApiDeployment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  environment: str,
  org_id: str,
  proxy_id: str,
  revision: str,
  deletion_policy: str = None,
  timeouts: ApigeeApiDeploymentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.Initializer.parameter.environment">environment</a></code> | <code>str</code> | The Apigee Environment associated with the Apigee API deployment. |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | The Apigee Organization associated with the Apigee API deployment. |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.Initializer.parameter.proxyId">proxy_id</a></code> | <code>str</code> | The Apigee API associated with the Apigee API deployment. |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.Initializer.parameter.revision">revision</a></code> | <code>str</code> | The revision of the API proxy to be deployed. |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeouts">ApigeeApiDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.Initializer.parameter.environment"></a>

- *Type:* str

The Apigee Environment associated with the Apigee API deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_api_deployment#environment ApigeeApiDeployment#environment}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.Initializer.parameter.orgId"></a>

- *Type:* str

The Apigee Organization associated with the Apigee API deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_api_deployment#org_id ApigeeApiDeployment#org_id}

---

##### `proxy_id`<sup>Required</sup> <a name="proxy_id" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.Initializer.parameter.proxyId"></a>

- *Type:* str

The Apigee API associated with the Apigee API deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_api_deployment#proxy_id ApigeeApiDeployment#proxy_id}

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.Initializer.parameter.revision"></a>

- *Type:* str

The revision of the API proxy to be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_api_deployment#revision ApigeeApiDeployment#revision}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_api_deployment#deletion_policy ApigeeApiDeployment#deletion_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeouts">ApigeeApiDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_api_deployment#timeouts ApigeeApiDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_api_deployment#create ApigeeApiDeployment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_api_deployment#delete ApigeeApiDeployment#delete}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApigeeApiDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.isConstruct"></a>

```python
from cdktn_provider_google import apigee_api_deployment

apigeeApiDeployment.ApigeeApiDeployment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.isTerraformElement"></a>

```python
from cdktn_provider_google import apigee_api_deployment

apigeeApiDeployment.ApigeeApiDeployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.isTerraformResource"></a>

```python
from cdktn_provider_google import apigee_api_deployment

apigeeApiDeployment.ApigeeApiDeployment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.generateConfigForImport"></a>

```python
from cdktn_provider_google import apigee_api_deployment

apigeeApiDeployment.ApigeeApiDeployment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApigeeApiDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApigeeApiDeployment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApigeeApiDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_api_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApigeeApiDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference">ApigeeApiDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.proxyIdInput">proxy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.revisionInput">revision_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeouts">ApigeeApiDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.proxyId">proxy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.revision">revision</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.timeouts"></a>

```python
timeouts: ApigeeApiDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference">ApigeeApiDeploymentTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `proxy_id_input`<sup>Optional</sup> <a name="proxy_id_input" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.proxyIdInput"></a>

```python
proxy_id_input: str
```

- *Type:* str

---

##### `revision_input`<sup>Optional</sup> <a name="revision_input" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.revisionInput"></a>

```python
revision_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ApigeeApiDeploymentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeouts">ApigeeApiDeploymentTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `proxy_id`<sup>Required</sup> <a name="proxy_id" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.proxyId"></a>

```python
proxy_id: str
```

- *Type:* str

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.revision"></a>

```python
revision: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeApiDeploymentConfig <a name="ApigeeApiDeploymentConfig" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentConfig.Initializer"></a>

```python
from cdktn_provider_google import apigee_api_deployment

apigeeApiDeployment.ApigeeApiDeploymentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  environment: str,
  org_id: str,
  proxy_id: str,
  revision: str,
  deletion_policy: str = None,
  timeouts: ApigeeApiDeploymentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentConfig.property.environment">environment</a></code> | <code>str</code> | The Apigee Environment associated with the Apigee API deployment. |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentConfig.property.orgId">org_id</a></code> | <code>str</code> | The Apigee Organization associated with the Apigee API deployment. |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentConfig.property.proxyId">proxy_id</a></code> | <code>str</code> | The Apigee API associated with the Apigee API deployment. |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentConfig.property.revision">revision</a></code> | <code>str</code> | The revision of the API proxy to be deployed. |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeouts">ApigeeApiDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentConfig.property.environment"></a>

```python
environment: str
```

- *Type:* str

The Apigee Environment associated with the Apigee API deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_api_deployment#environment ApigeeApiDeployment#environment}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

The Apigee Organization associated with the Apigee API deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_api_deployment#org_id ApigeeApiDeployment#org_id}

---

##### `proxy_id`<sup>Required</sup> <a name="proxy_id" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentConfig.property.proxyId"></a>

```python
proxy_id: str
```

- *Type:* str

The Apigee API associated with the Apigee API deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_api_deployment#proxy_id ApigeeApiDeployment#proxy_id}

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentConfig.property.revision"></a>

```python
revision: str
```

- *Type:* str

The revision of the API proxy to be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_api_deployment#revision ApigeeApiDeployment#revision}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_api_deployment#deletion_policy ApigeeApiDeployment#deletion_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentConfig.property.timeouts"></a>

```python
timeouts: ApigeeApiDeploymentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeouts">ApigeeApiDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_api_deployment#timeouts ApigeeApiDeployment#timeouts}

---

### ApigeeApiDeploymentTimeouts <a name="ApigeeApiDeploymentTimeouts" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeouts.Initializer"></a>

```python
from cdktn_provider_google import apigee_api_deployment

apigeeApiDeployment.ApigeeApiDeploymentTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_api_deployment#create ApigeeApiDeployment#create}. |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_api_deployment#delete ApigeeApiDeployment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_api_deployment#create ApigeeApiDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_api_deployment#delete ApigeeApiDeployment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeApiDeploymentTimeoutsOutputReference <a name="ApigeeApiDeploymentTimeoutsOutputReference" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import apigee_api_deployment

apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeouts">ApigeeApiDeploymentTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApigeeApiDeploymentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeApiDeployment.ApigeeApiDeploymentTimeouts">ApigeeApiDeploymentTimeouts</a>

---



