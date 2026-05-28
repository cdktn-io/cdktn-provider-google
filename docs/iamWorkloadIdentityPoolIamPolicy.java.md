# `iamWorkloadIdentityPoolIamPolicy` Submodule <a name="`iamWorkloadIdentityPoolIamPolicy` Submodule" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkloadIdentityPoolIamPolicy <a name="IamWorkloadIdentityPoolIamPolicy" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workload_identity_pool_iam_policy google_iam_workload_identity_pool_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.Initializer"></a>

```java
import io.cdktn.providers.google.iam_workload_identity_pool_iam_policy.IamWorkloadIdentityPoolIamPolicy;

IamWorkloadIdentityPoolIamPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .policyData(java.lang.String)
    .workloadIdentityPoolId(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.Initializer.parameter.policyData">policyData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workload_identity_pool_iam_policy#policy_data IamWorkloadIdentityPoolIamPolicy#policy_data}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.Initializer.parameter.workloadIdentityPoolId">workloadIdentityPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workload_identity_pool_iam_policy#workload_identity_pool_id IamWorkloadIdentityPoolIamPolicy#workload_identity_pool_id}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workload_identity_pool_iam_policy#id IamWorkloadIdentityPoolIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workload_identity_pool_iam_policy#project IamWorkloadIdentityPoolIamPolicy#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.Initializer.parameter.policyData"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workload_identity_pool_iam_policy#policy_data IamWorkloadIdentityPoolIamPolicy#policy_data}.

---

##### `workloadIdentityPoolId`<sup>Required</sup> <a name="workloadIdentityPoolId" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.Initializer.parameter.workloadIdentityPoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workload_identity_pool_iam_policy#workload_identity_pool_id IamWorkloadIdentityPoolIamPolicy#workload_identity_pool_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workload_identity_pool_iam_policy#id IamWorkloadIdentityPoolIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workload_identity_pool_iam_policy#project IamWorkloadIdentityPoolIamPolicy#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IamWorkloadIdentityPoolIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.isConstruct"></a>

```java
import io.cdktn.providers.google.iam_workload_identity_pool_iam_policy.IamWorkloadIdentityPoolIamPolicy;

IamWorkloadIdentityPoolIamPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.google.iam_workload_identity_pool_iam_policy.IamWorkloadIdentityPoolIamPolicy;

IamWorkloadIdentityPoolIamPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.google.iam_workload_identity_pool_iam_policy.IamWorkloadIdentityPoolIamPolicy;

IamWorkloadIdentityPoolIamPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.iam_workload_identity_pool_iam_policy.IamWorkloadIdentityPoolIamPolicy;

IamWorkloadIdentityPoolIamPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IamWorkloadIdentityPoolIamPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IamWorkloadIdentityPoolIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IamWorkloadIdentityPoolIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IamWorkloadIdentityPoolIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workload_identity_pool_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IamWorkloadIdentityPoolIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.policyDataInput">policyDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.workloadIdentityPoolIdInput">workloadIdentityPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.policyData">policyData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.workloadIdentityPoolId">workloadIdentityPoolId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `policyDataInput`<sup>Optional</sup> <a name="policyDataInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.policyDataInput"></a>

```java
public java.lang.String getPolicyDataInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `workloadIdentityPoolIdInput`<sup>Optional</sup> <a name="workloadIdentityPoolIdInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.workloadIdentityPoolIdInput"></a>

```java
public java.lang.String getWorkloadIdentityPoolIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.policyData"></a>

```java
public java.lang.String getPolicyData();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `workloadIdentityPoolId`<sup>Required</sup> <a name="workloadIdentityPoolId" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.workloadIdentityPoolId"></a>

```java
public java.lang.String getWorkloadIdentityPoolId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkloadIdentityPoolIamPolicyConfig <a name="IamWorkloadIdentityPoolIamPolicyConfig" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.google.iam_workload_identity_pool_iam_policy.IamWorkloadIdentityPoolIamPolicyConfig;

IamWorkloadIdentityPoolIamPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .policyData(java.lang.String)
    .workloadIdentityPoolId(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.policyData">policyData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workload_identity_pool_iam_policy#policy_data IamWorkloadIdentityPoolIamPolicy#policy_data}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.workloadIdentityPoolId">workloadIdentityPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workload_identity_pool_iam_policy#workload_identity_pool_id IamWorkloadIdentityPoolIamPolicy#workload_identity_pool_id}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workload_identity_pool_iam_policy#id IamWorkloadIdentityPoolIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workload_identity_pool_iam_policy#project IamWorkloadIdentityPoolIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.policyData"></a>

```java
public java.lang.String getPolicyData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workload_identity_pool_iam_policy#policy_data IamWorkloadIdentityPoolIamPolicy#policy_data}.

---

##### `workloadIdentityPoolId`<sup>Required</sup> <a name="workloadIdentityPoolId" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.workloadIdentityPoolId"></a>

```java
public java.lang.String getWorkloadIdentityPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workload_identity_pool_iam_policy#workload_identity_pool_id IamWorkloadIdentityPoolIamPolicy#workload_identity_pool_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workload_identity_pool_iam_policy#id IamWorkloadIdentityPoolIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/iam_workload_identity_pool_iam_policy#project IamWorkloadIdentityPoolIamPolicy#project}.

---



