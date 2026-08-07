# `projectOrganizationPolicy` Submodule <a name="`projectOrganizationPolicy` Submodule" id="@cdktn/provider-google.projectOrganizationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectOrganizationPolicy <a name="ProjectOrganizationPolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy google_project_organization_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer"></a>

```java
import io.cdktn.providers.google.project_organization_policy.ProjectOrganizationPolicy;

ProjectOrganizationPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .constraint(java.lang.String)
    .project(java.lang.String)
//  .booleanPolicy(ProjectOrganizationPolicyBooleanPolicy)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .listPolicy(ProjectOrganizationPolicyListPolicy)
//  .restorePolicy(ProjectOrganizationPolicyRestorePolicy)
//  .timeouts(ProjectOrganizationPolicyTimeouts)
//  .version(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.constraint">constraint</a></code> | <code>java.lang.String</code> | The name of the Constraint the Policy is configuring, for example, serviceuser.services. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The project ID. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.booleanPolicy">booleanPolicy</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy">ProjectOrganizationPolicyBooleanPolicy</a></code> | boolean_policy block. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#id ProjectOrganizationPolicy#id}. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.listPolicy">listPolicy</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy">ProjectOrganizationPolicyListPolicy</a></code> | list_policy block. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.restorePolicy">restorePolicy</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy">ProjectOrganizationPolicyRestorePolicy</a></code> | restore_policy block. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts">ProjectOrganizationPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.version">version</a></code> | <code>java.lang.Number</code> | Version of the Policy. Default version is 0. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.constraint"></a>

- *Type:* java.lang.String

The name of the Constraint the Policy is configuring, for example, serviceuser.services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#constraint ProjectOrganizationPolicy#constraint}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#project ProjectOrganizationPolicy#project}

---

##### `booleanPolicy`<sup>Optional</sup> <a name="booleanPolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.booleanPolicy"></a>

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy">ProjectOrganizationPolicyBooleanPolicy</a>

boolean_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#boolean_policy ProjectOrganizationPolicy#boolean_policy}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#deletion_policy ProjectOrganizationPolicy#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#id ProjectOrganizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listPolicy`<sup>Optional</sup> <a name="listPolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.listPolicy"></a>

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy">ProjectOrganizationPolicyListPolicy</a>

list_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#list_policy ProjectOrganizationPolicy#list_policy}

---

##### `restorePolicy`<sup>Optional</sup> <a name="restorePolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.restorePolicy"></a>

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy">ProjectOrganizationPolicyRestorePolicy</a>

restore_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#restore_policy ProjectOrganizationPolicy#restore_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts">ProjectOrganizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#timeouts ProjectOrganizationPolicy#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.version"></a>

- *Type:* java.lang.Number

Version of the Policy. Default version is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#version ProjectOrganizationPolicy#version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putBooleanPolicy">putBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putListPolicy">putListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putRestorePolicy">putRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetBooleanPolicy">resetBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetListPolicy">resetListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetRestorePolicy">resetRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBooleanPolicy` <a name="putBooleanPolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putBooleanPolicy"></a>

```java
public void putBooleanPolicy(ProjectOrganizationPolicyBooleanPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putBooleanPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy">ProjectOrganizationPolicyBooleanPolicy</a>

---

##### `putListPolicy` <a name="putListPolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putListPolicy"></a>

```java
public void putListPolicy(ProjectOrganizationPolicyListPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putListPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy">ProjectOrganizationPolicyListPolicy</a>

---

##### `putRestorePolicy` <a name="putRestorePolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putRestorePolicy"></a>

```java
public void putRestorePolicy(ProjectOrganizationPolicyRestorePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putRestorePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy">ProjectOrganizationPolicyRestorePolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putTimeouts"></a>

```java
public void putTimeouts(ProjectOrganizationPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts">ProjectOrganizationPolicyTimeouts</a>

---

##### `resetBooleanPolicy` <a name="resetBooleanPolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetBooleanPolicy"></a>

```java
public void resetBooleanPolicy()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetListPolicy` <a name="resetListPolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetListPolicy"></a>

```java
public void resetListPolicy()
```

##### `resetRestorePolicy` <a name="resetRestorePolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetRestorePolicy"></a>

```java
public void resetRestorePolicy()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetVersion"></a>

```java
public void resetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ProjectOrganizationPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.isConstruct"></a>

```java
import io.cdktn.providers.google.project_organization_policy.ProjectOrganizationPolicy;

ProjectOrganizationPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.google.project_organization_policy.ProjectOrganizationPolicy;

ProjectOrganizationPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.google.project_organization_policy.ProjectOrganizationPolicy;

ProjectOrganizationPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.project_organization_policy.ProjectOrganizationPolicy;

ProjectOrganizationPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ProjectOrganizationPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ProjectOrganizationPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ProjectOrganizationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ProjectOrganizationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ProjectOrganizationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.booleanPolicy">booleanPolicy</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference">ProjectOrganizationPolicyBooleanPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.listPolicy">listPolicy</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference">ProjectOrganizationPolicyListPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.restorePolicy">restorePolicy</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference">ProjectOrganizationPolicyRestorePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference">ProjectOrganizationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.booleanPolicyInput">booleanPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy">ProjectOrganizationPolicyBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.constraintInput">constraintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.listPolicyInput">listPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy">ProjectOrganizationPolicyListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.restorePolicyInput">restorePolicyInput</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy">ProjectOrganizationPolicyRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts">ProjectOrganizationPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.versionInput">versionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.constraint">constraint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `booleanPolicy`<sup>Required</sup> <a name="booleanPolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.booleanPolicy"></a>

```java
public ProjectOrganizationPolicyBooleanPolicyOutputReference getBooleanPolicy();
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference">ProjectOrganizationPolicyBooleanPolicyOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `listPolicy`<sup>Required</sup> <a name="listPolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.listPolicy"></a>

```java
public ProjectOrganizationPolicyListPolicyOutputReference getListPolicy();
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference">ProjectOrganizationPolicyListPolicyOutputReference</a>

---

##### `restorePolicy`<sup>Required</sup> <a name="restorePolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.restorePolicy"></a>

```java
public ProjectOrganizationPolicyRestorePolicyOutputReference getRestorePolicy();
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference">ProjectOrganizationPolicyRestorePolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.timeouts"></a>

```java
public ProjectOrganizationPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference">ProjectOrganizationPolicyTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `booleanPolicyInput`<sup>Optional</sup> <a name="booleanPolicyInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.booleanPolicyInput"></a>

```java
public ProjectOrganizationPolicyBooleanPolicy getBooleanPolicyInput();
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy">ProjectOrganizationPolicyBooleanPolicy</a>

---

##### `constraintInput`<sup>Optional</sup> <a name="constraintInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.constraintInput"></a>

```java
public java.lang.String getConstraintInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `listPolicyInput`<sup>Optional</sup> <a name="listPolicyInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.listPolicyInput"></a>

```java
public ProjectOrganizationPolicyListPolicy getListPolicyInput();
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy">ProjectOrganizationPolicyListPolicy</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `restorePolicyInput`<sup>Optional</sup> <a name="restorePolicyInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.restorePolicyInput"></a>

```java
public ProjectOrganizationPolicyRestorePolicy getRestorePolicyInput();
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy">ProjectOrganizationPolicyRestorePolicy</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.timeoutsInput"></a>

```java
public IResolvable|ProjectOrganizationPolicyTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts">ProjectOrganizationPolicyTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.versionInput"></a>

```java
public java.lang.Number getVersionInput();
```

- *Type:* java.lang.Number

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.constraint"></a>

```java
public java.lang.String getConstraint();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectOrganizationPolicyBooleanPolicy <a name="ProjectOrganizationPolicyBooleanPolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy.Initializer"></a>

```java
import io.cdktn.providers.google.project_organization_policy.ProjectOrganizationPolicyBooleanPolicy;

ProjectOrganizationPolicyBooleanPolicy.builder()
    .enforced(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy.property.enforced">enforced</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, then the Policy is enforced. If false, then any configuration is acceptable. |

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy.property.enforced"></a>

```java
public java.lang.Boolean|IResolvable getEnforced();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, then the Policy is enforced. If false, then any configuration is acceptable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#enforced ProjectOrganizationPolicy#enforced}

---

### ProjectOrganizationPolicyConfig <a name="ProjectOrganizationPolicyConfig" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.google.project_organization_policy.ProjectOrganizationPolicyConfig;

ProjectOrganizationPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .constraint(java.lang.String)
    .project(java.lang.String)
//  .booleanPolicy(ProjectOrganizationPolicyBooleanPolicy)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .listPolicy(ProjectOrganizationPolicyListPolicy)
//  .restorePolicy(ProjectOrganizationPolicyRestorePolicy)
//  .timeouts(ProjectOrganizationPolicyTimeouts)
//  .version(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.constraint">constraint</a></code> | <code>java.lang.String</code> | The name of the Constraint the Policy is configuring, for example, serviceuser.services. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | The project ID. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.booleanPolicy">booleanPolicy</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy">ProjectOrganizationPolicyBooleanPolicy</a></code> | boolean_policy block. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#id ProjectOrganizationPolicy#id}. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.listPolicy">listPolicy</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy">ProjectOrganizationPolicyListPolicy</a></code> | list_policy block. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.restorePolicy">restorePolicy</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy">ProjectOrganizationPolicyRestorePolicy</a></code> | restore_policy block. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts">ProjectOrganizationPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.version">version</a></code> | <code>java.lang.Number</code> | Version of the Policy. Default version is 0. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.constraint"></a>

```java
public java.lang.String getConstraint();
```

- *Type:* java.lang.String

The name of the Constraint the Policy is configuring, for example, serviceuser.services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#constraint ProjectOrganizationPolicy#constraint}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#project ProjectOrganizationPolicy#project}

---

##### `booleanPolicy`<sup>Optional</sup> <a name="booleanPolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.booleanPolicy"></a>

```java
public ProjectOrganizationPolicyBooleanPolicy getBooleanPolicy();
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy">ProjectOrganizationPolicyBooleanPolicy</a>

boolean_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#boolean_policy ProjectOrganizationPolicy#boolean_policy}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#deletion_policy ProjectOrganizationPolicy#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#id ProjectOrganizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listPolicy`<sup>Optional</sup> <a name="listPolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.listPolicy"></a>

```java
public ProjectOrganizationPolicyListPolicy getListPolicy();
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy">ProjectOrganizationPolicyListPolicy</a>

list_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#list_policy ProjectOrganizationPolicy#list_policy}

---

##### `restorePolicy`<sup>Optional</sup> <a name="restorePolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.restorePolicy"></a>

```java
public ProjectOrganizationPolicyRestorePolicy getRestorePolicy();
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy">ProjectOrganizationPolicyRestorePolicy</a>

restore_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#restore_policy ProjectOrganizationPolicy#restore_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.timeouts"></a>

```java
public ProjectOrganizationPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts">ProjectOrganizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#timeouts ProjectOrganizationPolicy#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

Version of the Policy. Default version is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#version ProjectOrganizationPolicy#version}

---

### ProjectOrganizationPolicyListPolicy <a name="ProjectOrganizationPolicyListPolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy.Initializer"></a>

```java
import io.cdktn.providers.google.project_organization_policy.ProjectOrganizationPolicyListPolicy;

ProjectOrganizationPolicyListPolicy.builder()
//  .allow(ProjectOrganizationPolicyListPolicyAllow)
//  .deny(ProjectOrganizationPolicyListPolicyDeny)
//  .inheritFromParent(java.lang.Boolean|IResolvable)
//  .suggestedValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy.property.allow">allow</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow">ProjectOrganizationPolicyListPolicyAllow</a></code> | allow block. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy.property.deny">deny</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny">ProjectOrganizationPolicyListPolicyDeny</a></code> | deny block. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy.property.inheritFromParent">inheritFromParent</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy.property.suggestedValue">suggestedValue</a></code> | <code>java.lang.String</code> | The Google Cloud Console will try to default to a configuration that matches the value specified in this field. |

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy.property.allow"></a>

```java
public ProjectOrganizationPolicyListPolicyAllow getAllow();
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow">ProjectOrganizationPolicyListPolicyAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#allow ProjectOrganizationPolicy#allow}

---

##### `deny`<sup>Optional</sup> <a name="deny" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy.property.deny"></a>

```java
public ProjectOrganizationPolicyListPolicyDeny getDeny();
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny">ProjectOrganizationPolicyListPolicyDeny</a>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#deny ProjectOrganizationPolicy#deny}

---

##### `inheritFromParent`<sup>Optional</sup> <a name="inheritFromParent" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy.property.inheritFromParent"></a>

```java
public java.lang.Boolean|IResolvable getInheritFromParent();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#inherit_from_parent ProjectOrganizationPolicy#inherit_from_parent}

---

##### `suggestedValue`<sup>Optional</sup> <a name="suggestedValue" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy.property.suggestedValue"></a>

```java
public java.lang.String getSuggestedValue();
```

- *Type:* java.lang.String

The Google Cloud Console will try to default to a configuration that matches the value specified in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#suggested_value ProjectOrganizationPolicy#suggested_value}

---

### ProjectOrganizationPolicyListPolicyAllow <a name="ProjectOrganizationPolicyListPolicyAllow" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow.Initializer"></a>

```java
import io.cdktn.providers.google.project_organization_policy.ProjectOrganizationPolicyListPolicyAllow;

ProjectOrganizationPolicyListPolicyAllow.builder()
//  .all(java.lang.Boolean|IResolvable)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow.property.all">all</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The policy allows or denies all values. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | The policy can define specific values that are allowed or denied. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow.property.all"></a>

```java
public java.lang.Boolean|IResolvable getAll();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#all ProjectOrganizationPolicy#all}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#values ProjectOrganizationPolicy#values}

---

### ProjectOrganizationPolicyListPolicyDeny <a name="ProjectOrganizationPolicyListPolicyDeny" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny.Initializer"></a>

```java
import io.cdktn.providers.google.project_organization_policy.ProjectOrganizationPolicyListPolicyDeny;

ProjectOrganizationPolicyListPolicyDeny.builder()
//  .all(java.lang.Boolean|IResolvable)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny.property.all">all</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The policy allows or denies all values. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | The policy can define specific values that are allowed or denied. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny.property.all"></a>

```java
public java.lang.Boolean|IResolvable getAll();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#all ProjectOrganizationPolicy#all}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#values ProjectOrganizationPolicy#values}

---

### ProjectOrganizationPolicyRestorePolicy <a name="ProjectOrganizationPolicyRestorePolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy.Initializer"></a>

```java
import io.cdktn.providers.google.project_organization_policy.ProjectOrganizationPolicyRestorePolicy;

ProjectOrganizationPolicyRestorePolicy.builder()
    .default(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy.property.default">default</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | May only be set to true. If set, then the default Policy is restored. |

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy.property.default"></a>

```java
public java.lang.Boolean|IResolvable getDefault();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

May only be set to true. If set, then the default Policy is restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#default ProjectOrganizationPolicy#default}

---

### ProjectOrganizationPolicyTimeouts <a name="ProjectOrganizationPolicyTimeouts" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.project_organization_policy.ProjectOrganizationPolicyTimeouts;

ProjectOrganizationPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#create ProjectOrganizationPolicy#create}. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#delete ProjectOrganizationPolicy#delete}. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#read ProjectOrganizationPolicy#read}. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#update ProjectOrganizationPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#create ProjectOrganizationPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#delete ProjectOrganizationPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#read ProjectOrganizationPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/project_organization_policy#update ProjectOrganizationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectOrganizationPolicyBooleanPolicyOutputReference <a name="ProjectOrganizationPolicyBooleanPolicyOutputReference" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.project_organization_policy.ProjectOrganizationPolicyBooleanPolicyOutputReference;

new ProjectOrganizationPolicyBooleanPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput">enforcedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.property.enforced">enforced</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy">ProjectOrganizationPolicyBooleanPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enforcedInput`<sup>Optional</sup> <a name="enforcedInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput"></a>

```java
public java.lang.Boolean|IResolvable getEnforcedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.property.enforced"></a>

```java
public java.lang.Boolean|IResolvable getEnforced();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.property.internalValue"></a>

```java
public ProjectOrganizationPolicyBooleanPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy">ProjectOrganizationPolicyBooleanPolicy</a>

---


### ProjectOrganizationPolicyListPolicyAllowOutputReference <a name="ProjectOrganizationPolicyListPolicyAllowOutputReference" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.project_organization_policy.ProjectOrganizationPolicyListPolicyAllowOutputReference;

new ProjectOrganizationPolicyListPolicyAllowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.resetAll">resetAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAll` <a name="resetAll" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.resetAll"></a>

```java
public void resetAll()
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.allInput">allInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.all">all</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow">ProjectOrganizationPolicyListPolicyAllow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allInput`<sup>Optional</sup> <a name="allInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.allInput"></a>

```java
public java.lang.Boolean|IResolvable getAllInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.all"></a>

```java
public java.lang.Boolean|IResolvable getAll();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.internalValue"></a>

```java
public ProjectOrganizationPolicyListPolicyAllow getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow">ProjectOrganizationPolicyListPolicyAllow</a>

---


### ProjectOrganizationPolicyListPolicyDenyOutputReference <a name="ProjectOrganizationPolicyListPolicyDenyOutputReference" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.project_organization_policy.ProjectOrganizationPolicyListPolicyDenyOutputReference;

new ProjectOrganizationPolicyListPolicyDenyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.resetAll">resetAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAll` <a name="resetAll" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.resetAll"></a>

```java
public void resetAll()
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.allInput">allInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.all">all</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny">ProjectOrganizationPolicyListPolicyDeny</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allInput`<sup>Optional</sup> <a name="allInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.allInput"></a>

```java
public java.lang.Boolean|IResolvable getAllInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.all"></a>

```java
public java.lang.Boolean|IResolvable getAll();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.internalValue"></a>

```java
public ProjectOrganizationPolicyListPolicyDeny getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny">ProjectOrganizationPolicyListPolicyDeny</a>

---


### ProjectOrganizationPolicyListPolicyOutputReference <a name="ProjectOrganizationPolicyListPolicyOutputReference" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.project_organization_policy.ProjectOrganizationPolicyListPolicyOutputReference;

new ProjectOrganizationPolicyListPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.putAllow">putAllow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.putDeny">putDeny</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.resetAllow">resetAllow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.resetDeny">resetDeny</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.resetInheritFromParent">resetInheritFromParent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.resetSuggestedValue">resetSuggestedValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllow` <a name="putAllow" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.putAllow"></a>

```java
public void putAllow(ProjectOrganizationPolicyListPolicyAllow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.putAllow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow">ProjectOrganizationPolicyListPolicyAllow</a>

---

##### `putDeny` <a name="putDeny" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.putDeny"></a>

```java
public void putDeny(ProjectOrganizationPolicyListPolicyDeny value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.putDeny.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny">ProjectOrganizationPolicyListPolicyDeny</a>

---

##### `resetAllow` <a name="resetAllow" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.resetAllow"></a>

```java
public void resetAllow()
```

##### `resetDeny` <a name="resetDeny" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.resetDeny"></a>

```java
public void resetDeny()
```

##### `resetInheritFromParent` <a name="resetInheritFromParent" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.resetInheritFromParent"></a>

```java
public void resetInheritFromParent()
```

##### `resetSuggestedValue` <a name="resetSuggestedValue" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.resetSuggestedValue"></a>

```java
public void resetSuggestedValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.allow">allow</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference">ProjectOrganizationPolicyListPolicyAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.deny">deny</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference">ProjectOrganizationPolicyListPolicyDenyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.allowInput">allowInput</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow">ProjectOrganizationPolicyListPolicyAllow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.denyInput">denyInput</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny">ProjectOrganizationPolicyListPolicyDeny</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput">inheritFromParentInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.suggestedValueInput">suggestedValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.inheritFromParent">inheritFromParent</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.suggestedValue">suggestedValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy">ProjectOrganizationPolicyListPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.allow"></a>

```java
public ProjectOrganizationPolicyListPolicyAllowOutputReference getAllow();
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference">ProjectOrganizationPolicyListPolicyAllowOutputReference</a>

---

##### `deny`<sup>Required</sup> <a name="deny" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.deny"></a>

```java
public ProjectOrganizationPolicyListPolicyDenyOutputReference getDeny();
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference">ProjectOrganizationPolicyListPolicyDenyOutputReference</a>

---

##### `allowInput`<sup>Optional</sup> <a name="allowInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.allowInput"></a>

```java
public ProjectOrganizationPolicyListPolicyAllow getAllowInput();
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow">ProjectOrganizationPolicyListPolicyAllow</a>

---

##### `denyInput`<sup>Optional</sup> <a name="denyInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.denyInput"></a>

```java
public ProjectOrganizationPolicyListPolicyDeny getDenyInput();
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny">ProjectOrganizationPolicyListPolicyDeny</a>

---

##### `inheritFromParentInput`<sup>Optional</sup> <a name="inheritFromParentInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput"></a>

```java
public java.lang.Boolean|IResolvable getInheritFromParentInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `suggestedValueInput`<sup>Optional</sup> <a name="suggestedValueInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.suggestedValueInput"></a>

```java
public java.lang.String getSuggestedValueInput();
```

- *Type:* java.lang.String

---

##### `inheritFromParent`<sup>Required</sup> <a name="inheritFromParent" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.inheritFromParent"></a>

```java
public java.lang.Boolean|IResolvable getInheritFromParent();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `suggestedValue`<sup>Required</sup> <a name="suggestedValue" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.suggestedValue"></a>

```java
public java.lang.String getSuggestedValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.internalValue"></a>

```java
public ProjectOrganizationPolicyListPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy">ProjectOrganizationPolicyListPolicy</a>

---


### ProjectOrganizationPolicyRestorePolicyOutputReference <a name="ProjectOrganizationPolicyRestorePolicyOutputReference" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.project_organization_policy.ProjectOrganizationPolicyRestorePolicyOutputReference;

new ProjectOrganizationPolicyRestorePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.property.default">default</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy">ProjectOrganizationPolicyRestorePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.property.defaultInput"></a>

```java
public java.lang.Boolean|IResolvable getDefaultInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.property.default"></a>

```java
public java.lang.Boolean|IResolvable getDefault();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.property.internalValue"></a>

```java
public ProjectOrganizationPolicyRestorePolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy">ProjectOrganizationPolicyRestorePolicy</a>

---


### ProjectOrganizationPolicyTimeoutsOutputReference <a name="ProjectOrganizationPolicyTimeoutsOutputReference" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.project_organization_policy.ProjectOrganizationPolicyTimeoutsOutputReference;

new ProjectOrganizationPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts">ProjectOrganizationPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ProjectOrganizationPolicyTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts">ProjectOrganizationPolicyTimeouts</a>

---



