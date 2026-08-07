# `iamWorkloadIdentityPoolManagedIdentity` Submodule <a name="`iamWorkloadIdentityPoolManagedIdentity` Submodule" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkloadIdentityPoolManagedIdentity <a name="IamWorkloadIdentityPoolManagedIdentity" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity google_iam_workload_identity_pool_managed_identity}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer"></a>

```python
from cdktn_provider_google import iam_workload_identity_pool_managed_identity

iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  workload_identity_pool_id: str,
  workload_identity_pool_managed_identity_id: str,
  workload_identity_pool_namespace_id: str,
  attestation_rules: IResolvable | typing.List[IamWorkloadIdentityPoolManagedIdentityAttestationRules] = None,
  deletion_policy: str = None,
  description: str = None,
  disabled: bool | IResolvable = None,
  id: str = None,
  project: str = None,
  timeouts: IamWorkloadIdentityPoolManagedIdentityTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.workloadIdentityPoolId">workload_identity_pool_id</a></code> | <code>str</code> | The ID to use for the pool, which becomes the final component of the resource name. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.workloadIdentityPoolManagedIdentityId">workload_identity_pool_managed_identity_id</a></code> | <code>str</code> | The ID to use for the managed identity. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.workloadIdentityPoolNamespaceId">workload_identity_pool_namespace_id</a></code> | <code>str</code> | The ID to use for the namespace. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.attestationRules">attestation_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules">IamWorkloadIdentityPoolManagedIdentityAttestationRules</a>]</code> | attestation_rules block. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the managed identity. Cannot exceed 256 characters. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the managed identity is disabled. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#id IamWorkloadIdentityPoolManagedIdentity#id}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#project IamWorkloadIdentityPoolManagedIdentity#project}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts">IamWorkloadIdentityPoolManagedIdentityTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `workload_identity_pool_id`<sup>Required</sup> <a name="workload_identity_pool_id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.workloadIdentityPoolId"></a>

- *Type:* str

The ID to use for the pool, which becomes the final component of the resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#workload_identity_pool_id IamWorkloadIdentityPoolManagedIdentity#workload_identity_pool_id}

---

##### `workload_identity_pool_managed_identity_id`<sup>Required</sup> <a name="workload_identity_pool_managed_identity_id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.workloadIdentityPoolManagedIdentityId"></a>

- *Type:* str

The ID to use for the managed identity.

This value must:

* contain at most 63 characters
* contain only lowercase alphanumeric characters or '-'
* start with an alphanumeric character
* end with an alphanumeric character

The prefix 'gcp-' will be reserved for future uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#workload_identity_pool_managed_identity_id IamWorkloadIdentityPoolManagedIdentity#workload_identity_pool_managed_identity_id}

---

##### `workload_identity_pool_namespace_id`<sup>Required</sup> <a name="workload_identity_pool_namespace_id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.workloadIdentityPoolNamespaceId"></a>

- *Type:* str

The ID to use for the namespace.

This value must:

* contain at most 63 characters
* contain only lowercase alphanumeric characters or '-'
* start with an alphanumeric character
* end with an alphanumeric character

The prefix 'gcp-' will be reserved for future uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#workload_identity_pool_namespace_id IamWorkloadIdentityPoolManagedIdentity#workload_identity_pool_namespace_id}

---

##### `attestation_rules`<sup>Optional</sup> <a name="attestation_rules" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.attestationRules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules">IamWorkloadIdentityPoolManagedIdentityAttestationRules</a>]

attestation_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#attestation_rules IamWorkloadIdentityPoolManagedIdentity#attestation_rules}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#deletion_policy IamWorkloadIdentityPoolManagedIdentity#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.description"></a>

- *Type:* str

A description of the managed identity. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#description IamWorkloadIdentityPoolManagedIdentity#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.disabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the managed identity is disabled.

If disabled, credentials may no longer be issued for
the identity, however existing credentials will still be accepted until they expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#disabled IamWorkloadIdentityPoolManagedIdentity#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#id IamWorkloadIdentityPoolManagedIdentity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#project IamWorkloadIdentityPoolManagedIdentity#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts">IamWorkloadIdentityPoolManagedIdentityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#timeouts IamWorkloadIdentityPoolManagedIdentity#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.putAttestationRules">put_attestation_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetAttestationRules">reset_attestation_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_attestation_rules` <a name="put_attestation_rules" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.putAttestationRules"></a>

```python
def put_attestation_rules(
  value: IResolvable | typing.List[IamWorkloadIdentityPoolManagedIdentityAttestationRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.putAttestationRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules">IamWorkloadIdentityPoolManagedIdentityAttestationRules</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#create IamWorkloadIdentityPoolManagedIdentity#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#delete IamWorkloadIdentityPoolManagedIdentity#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#update IamWorkloadIdentityPoolManagedIdentity#update}.

---

##### `reset_attestation_rules` <a name="reset_attestation_rules" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetAttestationRules"></a>

```python
def reset_attestation_rules() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IamWorkloadIdentityPoolManagedIdentity resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.isConstruct"></a>

```python
from cdktn_provider_google import iam_workload_identity_pool_managed_identity

iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.isTerraformElement"></a>

```python
from cdktn_provider_google import iam_workload_identity_pool_managed_identity

iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.isTerraformResource"></a>

```python
from cdktn_provider_google import iam_workload_identity_pool_managed_identity

iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.generateConfigForImport"></a>

```python
from cdktn_provider_google import iam_workload_identity_pool_managed_identity

iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IamWorkloadIdentityPoolManagedIdentity resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IamWorkloadIdentityPoolManagedIdentity to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IamWorkloadIdentityPoolManagedIdentity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IamWorkloadIdentityPoolManagedIdentity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.attestationRules">attestation_rules</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList">IamWorkloadIdentityPoolManagedIdentityAttestationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference">IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.attestationRulesInput">attestation_rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules">IamWorkloadIdentityPoolManagedIdentityAttestationRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts">IamWorkloadIdentityPoolManagedIdentityTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolIdInput">workload_identity_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolManagedIdentityIdInput">workload_identity_pool_managed_identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolNamespaceIdInput">workload_identity_pool_namespace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolId">workload_identity_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolManagedIdentityId">workload_identity_pool_managed_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolNamespaceId">workload_identity_pool_namespace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `attestation_rules`<sup>Required</sup> <a name="attestation_rules" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.attestationRules"></a>

```python
attestation_rules: IamWorkloadIdentityPoolManagedIdentityAttestationRulesList
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList">IamWorkloadIdentityPoolManagedIdentityAttestationRulesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.timeouts"></a>

```python
timeouts: IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference">IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference</a>

---

##### `attestation_rules_input`<sup>Optional</sup> <a name="attestation_rules_input" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.attestationRulesInput"></a>

```python
attestation_rules_input: IResolvable | typing.List[IamWorkloadIdentityPoolManagedIdentityAttestationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules">IamWorkloadIdentityPoolManagedIdentityAttestationRules</a>]

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | IamWorkloadIdentityPoolManagedIdentityTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts">IamWorkloadIdentityPoolManagedIdentityTimeouts</a>

---

##### `workload_identity_pool_id_input`<sup>Optional</sup> <a name="workload_identity_pool_id_input" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolIdInput"></a>

```python
workload_identity_pool_id_input: str
```

- *Type:* str

---

##### `workload_identity_pool_managed_identity_id_input`<sup>Optional</sup> <a name="workload_identity_pool_managed_identity_id_input" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolManagedIdentityIdInput"></a>

```python
workload_identity_pool_managed_identity_id_input: str
```

- *Type:* str

---

##### `workload_identity_pool_namespace_id_input`<sup>Optional</sup> <a name="workload_identity_pool_namespace_id_input" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolNamespaceIdInput"></a>

```python
workload_identity_pool_namespace_id_input: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `workload_identity_pool_id`<sup>Required</sup> <a name="workload_identity_pool_id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolId"></a>

```python
workload_identity_pool_id: str
```

- *Type:* str

---

##### `workload_identity_pool_managed_identity_id`<sup>Required</sup> <a name="workload_identity_pool_managed_identity_id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolManagedIdentityId"></a>

```python
workload_identity_pool_managed_identity_id: str
```

- *Type:* str

---

##### `workload_identity_pool_namespace_id`<sup>Required</sup> <a name="workload_identity_pool_namespace_id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolNamespaceId"></a>

```python
workload_identity_pool_namespace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkloadIdentityPoolManagedIdentityAttestationRules <a name="IamWorkloadIdentityPoolManagedIdentityAttestationRules" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules.Initializer"></a>

```python
from cdktn_provider_google import iam_workload_identity_pool_managed_identity

iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules(
  google_cloud_resource: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules.property.googleCloudResource">google_cloud_resource</a></code> | <code>str</code> | A single workload operating on Google Cloud. For example: '//compute.googleapis.com/projects/123/uid/zones/us-central1-a/instances/12345678'. |

---

##### `google_cloud_resource`<sup>Required</sup> <a name="google_cloud_resource" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules.property.googleCloudResource"></a>

```python
google_cloud_resource: str
```

- *Type:* str

A single workload operating on Google Cloud. For example: '//compute.googleapis.com/projects/123/uid/zones/us-central1-a/instances/12345678'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#google_cloud_resource IamWorkloadIdentityPoolManagedIdentity#google_cloud_resource}

---

### IamWorkloadIdentityPoolManagedIdentityConfig <a name="IamWorkloadIdentityPoolManagedIdentityConfig" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.Initializer"></a>

```python
from cdktn_provider_google import iam_workload_identity_pool_managed_identity

iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  workload_identity_pool_id: str,
  workload_identity_pool_managed_identity_id: str,
  workload_identity_pool_namespace_id: str,
  attestation_rules: IResolvable | typing.List[IamWorkloadIdentityPoolManagedIdentityAttestationRules] = None,
  deletion_policy: str = None,
  description: str = None,
  disabled: bool | IResolvable = None,
  id: str = None,
  project: str = None,
  timeouts: IamWorkloadIdentityPoolManagedIdentityTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolId">workload_identity_pool_id</a></code> | <code>str</code> | The ID to use for the pool, which becomes the final component of the resource name. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolManagedIdentityId">workload_identity_pool_managed_identity_id</a></code> | <code>str</code> | The ID to use for the managed identity. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolNamespaceId">workload_identity_pool_namespace_id</a></code> | <code>str</code> | The ID to use for the namespace. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.attestationRules">attestation_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules">IamWorkloadIdentityPoolManagedIdentityAttestationRules</a>]</code> | attestation_rules block. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.description">description</a></code> | <code>str</code> | A description of the managed identity. Cannot exceed 256 characters. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the managed identity is disabled. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#id IamWorkloadIdentityPoolManagedIdentity#id}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#project IamWorkloadIdentityPoolManagedIdentity#project}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts">IamWorkloadIdentityPoolManagedIdentityTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `workload_identity_pool_id`<sup>Required</sup> <a name="workload_identity_pool_id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolId"></a>

```python
workload_identity_pool_id: str
```

- *Type:* str

The ID to use for the pool, which becomes the final component of the resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#workload_identity_pool_id IamWorkloadIdentityPoolManagedIdentity#workload_identity_pool_id}

---

##### `workload_identity_pool_managed_identity_id`<sup>Required</sup> <a name="workload_identity_pool_managed_identity_id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolManagedIdentityId"></a>

```python
workload_identity_pool_managed_identity_id: str
```

- *Type:* str

The ID to use for the managed identity.

This value must:

* contain at most 63 characters
* contain only lowercase alphanumeric characters or '-'
* start with an alphanumeric character
* end with an alphanumeric character

The prefix 'gcp-' will be reserved for future uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#workload_identity_pool_managed_identity_id IamWorkloadIdentityPoolManagedIdentity#workload_identity_pool_managed_identity_id}

---

##### `workload_identity_pool_namespace_id`<sup>Required</sup> <a name="workload_identity_pool_namespace_id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolNamespaceId"></a>

```python
workload_identity_pool_namespace_id: str
```

- *Type:* str

The ID to use for the namespace.

This value must:

* contain at most 63 characters
* contain only lowercase alphanumeric characters or '-'
* start with an alphanumeric character
* end with an alphanumeric character

The prefix 'gcp-' will be reserved for future uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#workload_identity_pool_namespace_id IamWorkloadIdentityPoolManagedIdentity#workload_identity_pool_namespace_id}

---

##### `attestation_rules`<sup>Optional</sup> <a name="attestation_rules" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.attestationRules"></a>

```python
attestation_rules: IResolvable | typing.List[IamWorkloadIdentityPoolManagedIdentityAttestationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules">IamWorkloadIdentityPoolManagedIdentityAttestationRules</a>]

attestation_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#attestation_rules IamWorkloadIdentityPoolManagedIdentity#attestation_rules}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#deletion_policy IamWorkloadIdentityPoolManagedIdentity#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the managed identity. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#description IamWorkloadIdentityPoolManagedIdentity#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the managed identity is disabled.

If disabled, credentials may no longer be issued for
the identity, however existing credentials will still be accepted until they expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#disabled IamWorkloadIdentityPoolManagedIdentity#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#id IamWorkloadIdentityPoolManagedIdentity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#project IamWorkloadIdentityPoolManagedIdentity#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.timeouts"></a>

```python
timeouts: IamWorkloadIdentityPoolManagedIdentityTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts">IamWorkloadIdentityPoolManagedIdentityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#timeouts IamWorkloadIdentityPoolManagedIdentity#timeouts}

---

### IamWorkloadIdentityPoolManagedIdentityTimeouts <a name="IamWorkloadIdentityPoolManagedIdentityTimeouts" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts.Initializer"></a>

```python
from cdktn_provider_google import iam_workload_identity_pool_managed_identity

iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#create IamWorkloadIdentityPoolManagedIdentity#create}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#delete IamWorkloadIdentityPoolManagedIdentity#delete}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#update IamWorkloadIdentityPoolManagedIdentity#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#create IamWorkloadIdentityPoolManagedIdentity#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#delete IamWorkloadIdentityPoolManagedIdentity#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iam_workload_identity_pool_managed_identity#update IamWorkloadIdentityPoolManagedIdentity#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamWorkloadIdentityPoolManagedIdentityAttestationRulesList <a name="IamWorkloadIdentityPoolManagedIdentityAttestationRulesList" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer"></a>

```python
from cdktn_provider_google import iam_workload_identity_pool_managed_identity

iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules">IamWorkloadIdentityPoolManagedIdentityAttestationRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IamWorkloadIdentityPoolManagedIdentityAttestationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules">IamWorkloadIdentityPoolManagedIdentityAttestationRules</a>]

---


### IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference <a name="IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import iam_workload_identity_pool_managed_identity

iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.googleCloudResourceInput">google_cloud_resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.googleCloudResource">google_cloud_resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules">IamWorkloadIdentityPoolManagedIdentityAttestationRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `google_cloud_resource_input`<sup>Optional</sup> <a name="google_cloud_resource_input" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.googleCloudResourceInput"></a>

```python
google_cloud_resource_input: str
```

- *Type:* str

---

##### `google_cloud_resource`<sup>Required</sup> <a name="google_cloud_resource" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.googleCloudResource"></a>

```python
google_cloud_resource: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IamWorkloadIdentityPoolManagedIdentityAttestationRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules">IamWorkloadIdentityPoolManagedIdentityAttestationRules</a>

---


### IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference <a name="IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import iam_workload_identity_pool_managed_identity

iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts">IamWorkloadIdentityPoolManagedIdentityTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IamWorkloadIdentityPoolManagedIdentityTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts">IamWorkloadIdentityPoolManagedIdentityTimeouts</a>

---



