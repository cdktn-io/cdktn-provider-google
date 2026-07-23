# `secretManagerRegionalSecretIamMember` Submodule <a name="`secretManagerRegionalSecretIamMember` Submodule" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretManagerRegionalSecretIamMember <a name="SecretManagerRegionalSecretIamMember" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/secret_manager_regional_secret_iam_member google_secret_manager_regional_secret_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer"></a>

```java
import io.cdktn.providers.google.secret_manager_regional_secret_iam_member.SecretManagerRegionalSecretIamMember;

SecretManagerRegionalSecretIamMember.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .member(java.lang.String)
    .role(java.lang.String)
    .secretId(java.lang.String)
//  .condition(SecretManagerRegionalSecretIamMemberCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/secret_manager_regional_secret_iam_member#member SecretManagerRegionalSecretIamMember#member}. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/secret_manager_regional_secret_iam_member#role SecretManagerRegionalSecretIamMember#role}. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.secretId">secretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/secret_manager_regional_secret_iam_member#secret_id SecretManagerRegionalSecretIamMember#secret_id}. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberCondition">SecretManagerRegionalSecretIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/secret_manager_regional_secret_iam_member#id SecretManagerRegionalSecretIamMember#id}. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/secret_manager_regional_secret_iam_member#location SecretManagerRegionalSecretIamMember#location}. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/secret_manager_regional_secret_iam_member#project SecretManagerRegionalSecretIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.member"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/secret_manager_regional_secret_iam_member#member SecretManagerRegionalSecretIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/secret_manager_regional_secret_iam_member#role SecretManagerRegionalSecretIamMember#role}.

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.secretId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/secret_manager_regional_secret_iam_member#secret_id SecretManagerRegionalSecretIamMember#secret_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberCondition">SecretManagerRegionalSecretIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/secret_manager_regional_secret_iam_member#condition SecretManagerRegionalSecretIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/secret_manager_regional_secret_iam_member#id SecretManagerRegionalSecretIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/secret_manager_regional_secret_iam_member#location SecretManagerRegionalSecretIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/secret_manager_regional_secret_iam_member#project SecretManagerRegionalSecretIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.putCondition"></a>

```java
public void putCondition(SecretManagerRegionalSecretIamMemberCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberCondition">SecretManagerRegionalSecretIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecretManagerRegionalSecretIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.isConstruct"></a>

```java
import io.cdktn.providers.google.secret_manager_regional_secret_iam_member.SecretManagerRegionalSecretIamMember;

SecretManagerRegionalSecretIamMember.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.isTerraformElement"></a>

```java
import io.cdktn.providers.google.secret_manager_regional_secret_iam_member.SecretManagerRegionalSecretIamMember;

SecretManagerRegionalSecretIamMember.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.isTerraformResource"></a>

```java
import io.cdktn.providers.google.secret_manager_regional_secret_iam_member.SecretManagerRegionalSecretIamMember;

SecretManagerRegionalSecretIamMember.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.secret_manager_regional_secret_iam_member.SecretManagerRegionalSecretIamMember;

SecretManagerRegionalSecretIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecretManagerRegionalSecretIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SecretManagerRegionalSecretIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecretManagerRegionalSecretIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecretManagerRegionalSecretIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/secret_manager_regional_secret_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SecretManagerRegionalSecretIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference">SecretManagerRegionalSecretIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberCondition">SecretManagerRegionalSecretIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.memberInput">memberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.secretIdInput">secretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.member">member</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.condition"></a>

```java
public SecretManagerRegionalSecretIamMemberConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference">SecretManagerRegionalSecretIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.conditionInput"></a>

```java
public SecretManagerRegionalSecretIamMemberCondition getConditionInput();
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberCondition">SecretManagerRegionalSecretIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.memberInput"></a>

```java
public java.lang.String getMemberInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.secretIdInput"></a>

```java
public java.lang.String getSecretIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMember.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecretManagerRegionalSecretIamMemberCondition <a name="SecretManagerRegionalSecretIamMemberCondition" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberCondition.Initializer"></a>

```java
import io.cdktn.providers.google.secret_manager_regional_secret_iam_member.SecretManagerRegionalSecretIamMemberCondition;

SecretManagerRegionalSecretIamMemberCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/secret_manager_regional_secret_iam_member#expression SecretManagerRegionalSecretIamMember#expression}. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/secret_manager_regional_secret_iam_member#title SecretManagerRegionalSecretIamMember#title}. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/secret_manager_regional_secret_iam_member#description SecretManagerRegionalSecretIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/secret_manager_regional_secret_iam_member#expression SecretManagerRegionalSecretIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/secret_manager_regional_secret_iam_member#title SecretManagerRegionalSecretIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/secret_manager_regional_secret_iam_member#description SecretManagerRegionalSecretIamMember#description}.

---

### SecretManagerRegionalSecretIamMemberConfig <a name="SecretManagerRegionalSecretIamMemberConfig" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.Initializer"></a>

```java
import io.cdktn.providers.google.secret_manager_regional_secret_iam_member.SecretManagerRegionalSecretIamMemberConfig;

SecretManagerRegionalSecretIamMemberConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .member(java.lang.String)
    .role(java.lang.String)
    .secretId(java.lang.String)
//  .condition(SecretManagerRegionalSecretIamMemberCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/secret_manager_regional_secret_iam_member#member SecretManagerRegionalSecretIamMember#member}. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/secret_manager_regional_secret_iam_member#role SecretManagerRegionalSecretIamMember#role}. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.secretId">secretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/secret_manager_regional_secret_iam_member#secret_id SecretManagerRegionalSecretIamMember#secret_id}. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberCondition">SecretManagerRegionalSecretIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/secret_manager_regional_secret_iam_member#id SecretManagerRegionalSecretIamMember#id}. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/secret_manager_regional_secret_iam_member#location SecretManagerRegionalSecretIamMember#location}. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/secret_manager_regional_secret_iam_member#project SecretManagerRegionalSecretIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/secret_manager_regional_secret_iam_member#member SecretManagerRegionalSecretIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/secret_manager_regional_secret_iam_member#role SecretManagerRegionalSecretIamMember#role}.

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/secret_manager_regional_secret_iam_member#secret_id SecretManagerRegionalSecretIamMember#secret_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.condition"></a>

```java
public SecretManagerRegionalSecretIamMemberCondition getCondition();
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberCondition">SecretManagerRegionalSecretIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/secret_manager_regional_secret_iam_member#condition SecretManagerRegionalSecretIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/secret_manager_regional_secret_iam_member#id SecretManagerRegionalSecretIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/secret_manager_regional_secret_iam_member#location SecretManagerRegionalSecretIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/secret_manager_regional_secret_iam_member#project SecretManagerRegionalSecretIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecretManagerRegionalSecretIamMemberConditionOutputReference <a name="SecretManagerRegionalSecretIamMemberConditionOutputReference" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.secret_manager_regional_secret_iam_member.SecretManagerRegionalSecretIamMemberConditionOutputReference;

new SecretManagerRegionalSecretIamMemberConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberCondition">SecretManagerRegionalSecretIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberConditionOutputReference.property.internalValue"></a>

```java
public SecretManagerRegionalSecretIamMemberCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretIamMember.SecretManagerRegionalSecretIamMemberCondition">SecretManagerRegionalSecretIamMemberCondition</a>

---



