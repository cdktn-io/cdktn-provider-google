# `computeOrganizationSecurityPolicyAssociation` Submodule <a name="`computeOrganizationSecurityPolicyAssociation` Submodule" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeOrganizationSecurityPolicyAssociation <a name="ComputeOrganizationSecurityPolicyAssociation" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_association google_compute_organization_security_policy_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer"></a>

```java
import io.cdktn.providers.google.compute_organization_security_policy_association.ComputeOrganizationSecurityPolicyAssociation;

ComputeOrganizationSecurityPolicyAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .attachmentId(java.lang.String)
    .name(java.lang.String)
    .policyId(java.lang.String)
//  .excludedFolders(java.util.List<java.lang.String>)
//  .excludedProjects(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(ComputeOrganizationSecurityPolicyAssociationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.attachmentId">attachmentId</a></code> | <code>java.lang.String</code> | The resource that the security policy is attached to. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name for an association. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.policyId">policyId</a></code> | <code>java.lang.String</code> | The security policy ID of the association. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.excludedFolders">excludedFolders</a></code> | <code>java.util.List<java.lang.String></code> | A list of folders to exclude from the security policy. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.excludedProjects">excludedProjects</a></code> | <code>java.util.List<java.lang.String></code> | A list of projects to exclude from the security policy. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_association#id ComputeOrganizationSecurityPolicyAssociation#id}. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeouts">ComputeOrganizationSecurityPolicyAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `attachmentId`<sup>Required</sup> <a name="attachmentId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.attachmentId"></a>

- *Type:* java.lang.String

The resource that the security policy is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_association#attachment_id ComputeOrganizationSecurityPolicyAssociation#attachment_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name for an association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_association#name ComputeOrganizationSecurityPolicyAssociation#name}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.policyId"></a>

- *Type:* java.lang.String

The security policy ID of the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_association#policy_id ComputeOrganizationSecurityPolicyAssociation#policy_id}

---

##### `excludedFolders`<sup>Optional</sup> <a name="excludedFolders" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.excludedFolders"></a>

- *Type:* java.util.List<java.lang.String>

A list of folders to exclude from the security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_association#excluded_folders ComputeOrganizationSecurityPolicyAssociation#excluded_folders}

---

##### `excludedProjects`<sup>Optional</sup> <a name="excludedProjects" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.excludedProjects"></a>

- *Type:* java.util.List<java.lang.String>

A list of projects to exclude from the security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_association#excluded_projects ComputeOrganizationSecurityPolicyAssociation#excluded_projects}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_association#id ComputeOrganizationSecurityPolicyAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeouts">ComputeOrganizationSecurityPolicyAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_association#timeouts ComputeOrganizationSecurityPolicyAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.resetExcludedFolders">resetExcludedFolders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.resetExcludedProjects">resetExcludedProjects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.putTimeouts"></a>

```java
public void putTimeouts(ComputeOrganizationSecurityPolicyAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeouts">ComputeOrganizationSecurityPolicyAssociationTimeouts</a>

---

##### `resetExcludedFolders` <a name="resetExcludedFolders" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.resetExcludedFolders"></a>

```java
public void resetExcludedFolders()
```

##### `resetExcludedProjects` <a name="resetExcludedProjects" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.resetExcludedProjects"></a>

```java
public void resetExcludedProjects()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeOrganizationSecurityPolicyAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.isConstruct"></a>

```java
import io.cdktn.providers.google.compute_organization_security_policy_association.ComputeOrganizationSecurityPolicyAssociation;

ComputeOrganizationSecurityPolicyAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.google.compute_organization_security_policy_association.ComputeOrganizationSecurityPolicyAssociation;

ComputeOrganizationSecurityPolicyAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.google.compute_organization_security_policy_association.ComputeOrganizationSecurityPolicyAssociation;

ComputeOrganizationSecurityPolicyAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.compute_organization_security_policy_association.ComputeOrganizationSecurityPolicyAssociation;

ComputeOrganizationSecurityPolicyAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeOrganizationSecurityPolicyAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ComputeOrganizationSecurityPolicyAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeOrganizationSecurityPolicyAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeOrganizationSecurityPolicyAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ComputeOrganizationSecurityPolicyAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference">ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.attachmentIdInput">attachmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.excludedFoldersInput">excludedFoldersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.excludedProjectsInput">excludedProjectsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeouts">ComputeOrganizationSecurityPolicyAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.attachmentId">attachmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.excludedFolders">excludedFolders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.excludedProjects">excludedProjects</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.timeouts"></a>

```java
public ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference">ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference</a>

---

##### `attachmentIdInput`<sup>Optional</sup> <a name="attachmentIdInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.attachmentIdInput"></a>

```java
public java.lang.String getAttachmentIdInput();
```

- *Type:* java.lang.String

---

##### `excludedFoldersInput`<sup>Optional</sup> <a name="excludedFoldersInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.excludedFoldersInput"></a>

```java
public java.util.List<java.lang.String> getExcludedFoldersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedProjectsInput`<sup>Optional</sup> <a name="excludedProjectsInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.excludedProjectsInput"></a>

```java
public java.util.List<java.lang.String> getExcludedProjectsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.policyIdInput"></a>

```java
public java.lang.String getPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.timeoutsInput"></a>

```java
public IResolvable|ComputeOrganizationSecurityPolicyAssociationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeouts">ComputeOrganizationSecurityPolicyAssociationTimeouts</a>

---

##### `attachmentId`<sup>Required</sup> <a name="attachmentId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.attachmentId"></a>

```java
public java.lang.String getAttachmentId();
```

- *Type:* java.lang.String

---

##### `excludedFolders`<sup>Required</sup> <a name="excludedFolders" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.excludedFolders"></a>

```java
public java.util.List<java.lang.String> getExcludedFolders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedProjects`<sup>Required</sup> <a name="excludedProjects" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.excludedProjects"></a>

```java
public java.util.List<java.lang.String> getExcludedProjects();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeOrganizationSecurityPolicyAssociationConfig <a name="ComputeOrganizationSecurityPolicyAssociationConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.google.compute_organization_security_policy_association.ComputeOrganizationSecurityPolicyAssociationConfig;

ComputeOrganizationSecurityPolicyAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .attachmentId(java.lang.String)
    .name(java.lang.String)
    .policyId(java.lang.String)
//  .excludedFolders(java.util.List<java.lang.String>)
//  .excludedProjects(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(ComputeOrganizationSecurityPolicyAssociationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.attachmentId">attachmentId</a></code> | <code>java.lang.String</code> | The resource that the security policy is attached to. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name for an association. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.policyId">policyId</a></code> | <code>java.lang.String</code> | The security policy ID of the association. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.excludedFolders">excludedFolders</a></code> | <code>java.util.List<java.lang.String></code> | A list of folders to exclude from the security policy. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.excludedProjects">excludedProjects</a></code> | <code>java.util.List<java.lang.String></code> | A list of projects to exclude from the security policy. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_association#id ComputeOrganizationSecurityPolicyAssociation#id}. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeouts">ComputeOrganizationSecurityPolicyAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `attachmentId`<sup>Required</sup> <a name="attachmentId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.attachmentId"></a>

```java
public java.lang.String getAttachmentId();
```

- *Type:* java.lang.String

The resource that the security policy is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_association#attachment_id ComputeOrganizationSecurityPolicyAssociation#attachment_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name for an association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_association#name ComputeOrganizationSecurityPolicyAssociation#name}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

The security policy ID of the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_association#policy_id ComputeOrganizationSecurityPolicyAssociation#policy_id}

---

##### `excludedFolders`<sup>Optional</sup> <a name="excludedFolders" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.excludedFolders"></a>

```java
public java.util.List<java.lang.String> getExcludedFolders();
```

- *Type:* java.util.List<java.lang.String>

A list of folders to exclude from the security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_association#excluded_folders ComputeOrganizationSecurityPolicyAssociation#excluded_folders}

---

##### `excludedProjects`<sup>Optional</sup> <a name="excludedProjects" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.excludedProjects"></a>

```java
public java.util.List<java.lang.String> getExcludedProjects();
```

- *Type:* java.util.List<java.lang.String>

A list of projects to exclude from the security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_association#excluded_projects ComputeOrganizationSecurityPolicyAssociation#excluded_projects}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_association#id ComputeOrganizationSecurityPolicyAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.timeouts"></a>

```java
public ComputeOrganizationSecurityPolicyAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeouts">ComputeOrganizationSecurityPolicyAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_association#timeouts ComputeOrganizationSecurityPolicyAssociation#timeouts}

---

### ComputeOrganizationSecurityPolicyAssociationTimeouts <a name="ComputeOrganizationSecurityPolicyAssociationTimeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.compute_organization_security_policy_association.ComputeOrganizationSecurityPolicyAssociationTimeouts;

ComputeOrganizationSecurityPolicyAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_association#create ComputeOrganizationSecurityPolicyAssociation#create}. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_association#delete ComputeOrganizationSecurityPolicyAssociation#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_association#create ComputeOrganizationSecurityPolicyAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_organization_security_policy_association#delete ComputeOrganizationSecurityPolicyAssociation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference <a name="ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_organization_security_policy_association.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference;

new ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeouts">ComputeOrganizationSecurityPolicyAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeOrganizationSecurityPolicyAssociationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeouts">ComputeOrganizationSecurityPolicyAssociationTimeouts</a>

---



