# `gkeHubScopeRbacRoleBinding` Submodule <a name="`gkeHubScopeRbacRoleBinding` Submodule" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeHubScopeRbacRoleBinding <a name="GkeHubScopeRbacRoleBinding" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_hub_scope_rbac_role_binding google_gke_hub_scope_rbac_role_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer"></a>

```java
import io.cdktn.providers.google.gke_hub_scope_rbac_role_binding.GkeHubScopeRbacRoleBinding;

GkeHubScopeRbacRoleBinding.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .role(GkeHubScopeRbacRoleBindingRole)
    .scopeId(java.lang.String)
    .scopeRbacRoleBindingId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .group(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GkeHubScopeRbacRoleBindingTimeouts)
//  .user(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.role">role</a></code> | <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole">GkeHubScopeRbacRoleBindingRole</a></code> | role block. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.scopeId">scopeId</a></code> | <code>java.lang.String</code> | Id of the scope. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.scopeRbacRoleBindingId">scopeRbacRoleBindingId</a></code> | <code>java.lang.String</code> | The client-provided identifier of the RBAC Role Binding. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.group">group</a></code> | <code>java.lang.String</code> | Principal that is be authorized in the cluster (at least of one the oneof is required). |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_hub_scope_rbac_role_binding#id GkeHubScopeRbacRoleBinding#id}. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels for this ScopeRBACRoleBinding. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_hub_scope_rbac_role_binding#project GkeHubScopeRbacRoleBinding#project}. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts">GkeHubScopeRbacRoleBindingTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.user">user</a></code> | <code>java.lang.String</code> | Principal that is be authorized in the cluster (at least of one the oneof is required). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.role"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole">GkeHubScopeRbacRoleBindingRole</a>

role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_hub_scope_rbac_role_binding#role GkeHubScopeRbacRoleBinding#role}

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.scopeId"></a>

- *Type:* java.lang.String

Id of the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_hub_scope_rbac_role_binding#scope_id GkeHubScopeRbacRoleBinding#scope_id}

---

##### `scopeRbacRoleBindingId`<sup>Required</sup> <a name="scopeRbacRoleBindingId" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.scopeRbacRoleBindingId"></a>

- *Type:* java.lang.String

The client-provided identifier of the RBAC Role Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_hub_scope_rbac_role_binding#scope_rbac_role_binding_id GkeHubScopeRbacRoleBinding#scope_rbac_role_binding_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_hub_scope_rbac_role_binding#deletion_policy GkeHubScopeRbacRoleBinding#deletion_policy}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.group"></a>

- *Type:* java.lang.String

Principal that is be authorized in the cluster (at least of one the oneof is required).

Updating one will unset the other automatically.
group is the group, as seen by the kubernetes cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_hub_scope_rbac_role_binding#group GkeHubScopeRbacRoleBinding#group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_hub_scope_rbac_role_binding#id GkeHubScopeRbacRoleBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels for this ScopeRBACRoleBinding.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_hub_scope_rbac_role_binding#labels GkeHubScopeRbacRoleBinding#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_hub_scope_rbac_role_binding#project GkeHubScopeRbacRoleBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts">GkeHubScopeRbacRoleBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_hub_scope_rbac_role_binding#timeouts GkeHubScopeRbacRoleBinding#timeouts}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.user"></a>

- *Type:* java.lang.String

Principal that is be authorized in the cluster (at least of one the oneof is required).

Updating one will unset the other automatically.
user is the name of the user as seen by the kubernetes cluster, example
"alice" or "alice@domain.tld"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_hub_scope_rbac_role_binding#user GkeHubScopeRbacRoleBinding#user}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.putRole">putRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetUser">resetUser</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRole` <a name="putRole" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.putRole"></a>

```java
public void putRole(GkeHubScopeRbacRoleBindingRole value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.putRole.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole">GkeHubScopeRbacRoleBindingRole</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.putTimeouts"></a>

```java
public void putTimeouts(GkeHubScopeRbacRoleBindingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts">GkeHubScopeRbacRoleBindingTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetGroup` <a name="resetGroup" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetGroup"></a>

```java
public void resetGroup()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUser` <a name="resetUser" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetUser"></a>

```java
public void resetUser()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GkeHubScopeRbacRoleBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isConstruct"></a>

```java
import io.cdktn.providers.google.gke_hub_scope_rbac_role_binding.GkeHubScopeRbacRoleBinding;

GkeHubScopeRbacRoleBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isTerraformElement"></a>

```java
import io.cdktn.providers.google.gke_hub_scope_rbac_role_binding.GkeHubScopeRbacRoleBinding;

GkeHubScopeRbacRoleBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isTerraformResource"></a>

```java
import io.cdktn.providers.google.gke_hub_scope_rbac_role_binding.GkeHubScopeRbacRoleBinding;

GkeHubScopeRbacRoleBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.gke_hub_scope_rbac_role_binding.GkeHubScopeRbacRoleBinding;

GkeHubScopeRbacRoleBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GkeHubScopeRbacRoleBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GkeHubScopeRbacRoleBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GkeHubScopeRbacRoleBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GkeHubScopeRbacRoleBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_hub_scope_rbac_role_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GkeHubScopeRbacRoleBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.deleteTime">deleteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.role">role</a></code> | <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference">GkeHubScopeRbacRoleBindingRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.state">state</a></code> | <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList">GkeHubScopeRbacRoleBindingStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference">GkeHubScopeRbacRoleBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.groupInput">groupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.roleInput">roleInput</a></code> | <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole">GkeHubScopeRbacRoleBindingRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.scopeIdInput">scopeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.scopeRbacRoleBindingIdInput">scopeRbacRoleBindingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts">GkeHubScopeRbacRoleBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.userInput">userInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.group">group</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.scopeId">scopeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.scopeRbacRoleBindingId">scopeRbacRoleBindingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.user">user</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.deleteTime"></a>

```java
public java.lang.String getDeleteTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.role"></a>

```java
public GkeHubScopeRbacRoleBindingRoleOutputReference getRole();
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference">GkeHubScopeRbacRoleBindingRoleOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.state"></a>

```java
public GkeHubScopeRbacRoleBindingStateList getState();
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList">GkeHubScopeRbacRoleBindingStateList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.timeouts"></a>

```java
public GkeHubScopeRbacRoleBindingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference">GkeHubScopeRbacRoleBindingTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.groupInput"></a>

```java
public java.lang.String getGroupInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.roleInput"></a>

```java
public GkeHubScopeRbacRoleBindingRole getRoleInput();
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole">GkeHubScopeRbacRoleBindingRole</a>

---

##### `scopeIdInput`<sup>Optional</sup> <a name="scopeIdInput" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.scopeIdInput"></a>

```java
public java.lang.String getScopeIdInput();
```

- *Type:* java.lang.String

---

##### `scopeRbacRoleBindingIdInput`<sup>Optional</sup> <a name="scopeRbacRoleBindingIdInput" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.scopeRbacRoleBindingIdInput"></a>

```java
public java.lang.String getScopeRbacRoleBindingIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.timeoutsInput"></a>

```java
public IResolvable|GkeHubScopeRbacRoleBindingTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts">GkeHubScopeRbacRoleBindingTimeouts</a>

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.userInput"></a>

```java
public java.lang.String getUserInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.scopeId"></a>

```java
public java.lang.String getScopeId();
```

- *Type:* java.lang.String

---

##### `scopeRbacRoleBindingId`<sup>Required</sup> <a name="scopeRbacRoleBindingId" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.scopeRbacRoleBindingId"></a>

```java
public java.lang.String getScopeRbacRoleBindingId();
```

- *Type:* java.lang.String

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GkeHubScopeRbacRoleBindingConfig <a name="GkeHubScopeRbacRoleBindingConfig" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.Initializer"></a>

```java
import io.cdktn.providers.google.gke_hub_scope_rbac_role_binding.GkeHubScopeRbacRoleBindingConfig;

GkeHubScopeRbacRoleBindingConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .role(GkeHubScopeRbacRoleBindingRole)
    .scopeId(java.lang.String)
    .scopeRbacRoleBindingId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .group(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GkeHubScopeRbacRoleBindingTimeouts)
//  .user(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.role">role</a></code> | <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole">GkeHubScopeRbacRoleBindingRole</a></code> | role block. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.scopeId">scopeId</a></code> | <code>java.lang.String</code> | Id of the scope. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.scopeRbacRoleBindingId">scopeRbacRoleBindingId</a></code> | <code>java.lang.String</code> | The client-provided identifier of the RBAC Role Binding. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.group">group</a></code> | <code>java.lang.String</code> | Principal that is be authorized in the cluster (at least of one the oneof is required). |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_hub_scope_rbac_role_binding#id GkeHubScopeRbacRoleBinding#id}. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels for this ScopeRBACRoleBinding. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_hub_scope_rbac_role_binding#project GkeHubScopeRbacRoleBinding#project}. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts">GkeHubScopeRbacRoleBindingTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.user">user</a></code> | <code>java.lang.String</code> | Principal that is be authorized in the cluster (at least of one the oneof is required). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.role"></a>

```java
public GkeHubScopeRbacRoleBindingRole getRole();
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole">GkeHubScopeRbacRoleBindingRole</a>

role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_hub_scope_rbac_role_binding#role GkeHubScopeRbacRoleBinding#role}

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.scopeId"></a>

```java
public java.lang.String getScopeId();
```

- *Type:* java.lang.String

Id of the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_hub_scope_rbac_role_binding#scope_id GkeHubScopeRbacRoleBinding#scope_id}

---

##### `scopeRbacRoleBindingId`<sup>Required</sup> <a name="scopeRbacRoleBindingId" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.scopeRbacRoleBindingId"></a>

```java
public java.lang.String getScopeRbacRoleBindingId();
```

- *Type:* java.lang.String

The client-provided identifier of the RBAC Role Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_hub_scope_rbac_role_binding#scope_rbac_role_binding_id GkeHubScopeRbacRoleBinding#scope_rbac_role_binding_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_hub_scope_rbac_role_binding#deletion_policy GkeHubScopeRbacRoleBinding#deletion_policy}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

Principal that is be authorized in the cluster (at least of one the oneof is required).

Updating one will unset the other automatically.
group is the group, as seen by the kubernetes cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_hub_scope_rbac_role_binding#group GkeHubScopeRbacRoleBinding#group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_hub_scope_rbac_role_binding#id GkeHubScopeRbacRoleBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels for this ScopeRBACRoleBinding.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_hub_scope_rbac_role_binding#labels GkeHubScopeRbacRoleBinding#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_hub_scope_rbac_role_binding#project GkeHubScopeRbacRoleBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.timeouts"></a>

```java
public GkeHubScopeRbacRoleBindingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts">GkeHubScopeRbacRoleBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_hub_scope_rbac_role_binding#timeouts GkeHubScopeRbacRoleBinding#timeouts}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

Principal that is be authorized in the cluster (at least of one the oneof is required).

Updating one will unset the other automatically.
user is the name of the user as seen by the kubernetes cluster, example
"alice" or "alice@domain.tld"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_hub_scope_rbac_role_binding#user GkeHubScopeRbacRoleBinding#user}

---

### GkeHubScopeRbacRoleBindingRole <a name="GkeHubScopeRbacRoleBindingRole" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole.Initializer"></a>

```java
import io.cdktn.providers.google.gke_hub_scope_rbac_role_binding.GkeHubScopeRbacRoleBindingRole;

GkeHubScopeRbacRoleBindingRole.builder()
//  .customRole(java.lang.String)
//  .predefinedRole(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole.property.customRole">customRole</a></code> | <code>java.lang.String</code> | CustomRole is the custom Kubernetes ClusterRole to be used. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole.property.predefinedRole">predefinedRole</a></code> | <code>java.lang.String</code> | PredefinedRole is an ENUM representation of the default Kubernetes Roles Possible values: ["UNKNOWN", "ADMIN", "EDIT", "VIEW"]. |

---

##### `customRole`<sup>Optional</sup> <a name="customRole" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole.property.customRole"></a>

```java
public java.lang.String getCustomRole();
```

- *Type:* java.lang.String

CustomRole is the custom Kubernetes ClusterRole to be used.

The custom role format must be allowlisted in the rbacrolebindingactuation feature and RFC 1123 compliant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_hub_scope_rbac_role_binding#custom_role GkeHubScopeRbacRoleBinding#custom_role}

---

##### `predefinedRole`<sup>Optional</sup> <a name="predefinedRole" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole.property.predefinedRole"></a>

```java
public java.lang.String getPredefinedRole();
```

- *Type:* java.lang.String

PredefinedRole is an ENUM representation of the default Kubernetes Roles Possible values: ["UNKNOWN", "ADMIN", "EDIT", "VIEW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_hub_scope_rbac_role_binding#predefined_role GkeHubScopeRbacRoleBinding#predefined_role}

---

### GkeHubScopeRbacRoleBindingState <a name="GkeHubScopeRbacRoleBindingState" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingState.Initializer"></a>

```java
import io.cdktn.providers.google.gke_hub_scope_rbac_role_binding.GkeHubScopeRbacRoleBindingState;

GkeHubScopeRbacRoleBindingState.builder()
    .build();
```


### GkeHubScopeRbacRoleBindingTimeouts <a name="GkeHubScopeRbacRoleBindingTimeouts" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.gke_hub_scope_rbac_role_binding.GkeHubScopeRbacRoleBindingTimeouts;

GkeHubScopeRbacRoleBindingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_hub_scope_rbac_role_binding#create GkeHubScopeRbacRoleBinding#create}. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_hub_scope_rbac_role_binding#delete GkeHubScopeRbacRoleBinding#delete}. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_hub_scope_rbac_role_binding#update GkeHubScopeRbacRoleBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_hub_scope_rbac_role_binding#create GkeHubScopeRbacRoleBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_hub_scope_rbac_role_binding#delete GkeHubScopeRbacRoleBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/gke_hub_scope_rbac_role_binding#update GkeHubScopeRbacRoleBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeHubScopeRbacRoleBindingRoleOutputReference <a name="GkeHubScopeRbacRoleBindingRoleOutputReference" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.gke_hub_scope_rbac_role_binding.GkeHubScopeRbacRoleBindingRoleOutputReference;

new GkeHubScopeRbacRoleBindingRoleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.resetCustomRole">resetCustomRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.resetPredefinedRole">resetPredefinedRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomRole` <a name="resetCustomRole" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.resetCustomRole"></a>

```java
public void resetCustomRole()
```

##### `resetPredefinedRole` <a name="resetPredefinedRole" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.resetPredefinedRole"></a>

```java
public void resetPredefinedRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.customRoleInput">customRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.predefinedRoleInput">predefinedRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.customRole">customRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.predefinedRole">predefinedRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole">GkeHubScopeRbacRoleBindingRole</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customRoleInput`<sup>Optional</sup> <a name="customRoleInput" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.customRoleInput"></a>

```java
public java.lang.String getCustomRoleInput();
```

- *Type:* java.lang.String

---

##### `predefinedRoleInput`<sup>Optional</sup> <a name="predefinedRoleInput" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.predefinedRoleInput"></a>

```java
public java.lang.String getPredefinedRoleInput();
```

- *Type:* java.lang.String

---

##### `customRole`<sup>Required</sup> <a name="customRole" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.customRole"></a>

```java
public java.lang.String getCustomRole();
```

- *Type:* java.lang.String

---

##### `predefinedRole`<sup>Required</sup> <a name="predefinedRole" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.predefinedRole"></a>

```java
public java.lang.String getPredefinedRole();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.internalValue"></a>

```java
public GkeHubScopeRbacRoleBindingRole getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole">GkeHubScopeRbacRoleBindingRole</a>

---


### GkeHubScopeRbacRoleBindingStateList <a name="GkeHubScopeRbacRoleBindingStateList" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.Initializer"></a>

```java
import io.cdktn.providers.google.gke_hub_scope_rbac_role_binding.GkeHubScopeRbacRoleBindingStateList;

new GkeHubScopeRbacRoleBindingStateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.get"></a>

```java
public GkeHubScopeRbacRoleBindingStateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GkeHubScopeRbacRoleBindingStateOutputReference <a name="GkeHubScopeRbacRoleBindingStateOutputReference" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.gke_hub_scope_rbac_role_binding.GkeHubScopeRbacRoleBindingStateOutputReference;

new GkeHubScopeRbacRoleBindingStateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.property.code">code</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingState">GkeHubScopeRbacRoleBindingState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.property.internalValue"></a>

```java
public GkeHubScopeRbacRoleBindingState getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingState">GkeHubScopeRbacRoleBindingState</a>

---


### GkeHubScopeRbacRoleBindingTimeoutsOutputReference <a name="GkeHubScopeRbacRoleBindingTimeoutsOutputReference" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.gke_hub_scope_rbac_role_binding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference;

new GkeHubScopeRbacRoleBindingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts">GkeHubScopeRbacRoleBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GkeHubScopeRbacRoleBindingTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts">GkeHubScopeRbacRoleBindingTimeouts</a>

---



