# `beyondcorpApplicationIamMember` Submodule <a name="`beyondcorpApplicationIamMember` Submodule" id="@cdktn/provider-google.beyondcorpApplicationIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BeyondcorpApplicationIamMember <a name="BeyondcorpApplicationIamMember" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_application_iam_member google_beyondcorp_application_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.Initializer"></a>

```java
import io.cdktn.providers.google.beyondcorp_application_iam_member.BeyondcorpApplicationIamMember;

BeyondcorpApplicationIamMember.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .member(java.lang.String)
    .role(java.lang.String)
    .securityGatewaysId(java.lang.String)
//  .condition(BeyondcorpApplicationIamMemberCondition)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_application_iam_member#application_id BeyondcorpApplicationIamMember#application_id}. |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.Initializer.parameter.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_application_iam_member#member BeyondcorpApplicationIamMember#member}. |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_application_iam_member#role BeyondcorpApplicationIamMember#role}. |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.Initializer.parameter.securityGatewaysId">securityGatewaysId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_application_iam_member#security_gateways_id BeyondcorpApplicationIamMember#security_gateways_id}. |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberCondition">BeyondcorpApplicationIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_application_iam_member#id BeyondcorpApplicationIamMember#id}. |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_application_iam_member#project BeyondcorpApplicationIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_application_iam_member#application_id BeyondcorpApplicationIamMember#application_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.Initializer.parameter.member"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_application_iam_member#member BeyondcorpApplicationIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_application_iam_member#role BeyondcorpApplicationIamMember#role}.

---

##### `securityGatewaysId`<sup>Required</sup> <a name="securityGatewaysId" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.Initializer.parameter.securityGatewaysId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_application_iam_member#security_gateways_id BeyondcorpApplicationIamMember#security_gateways_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberCondition">BeyondcorpApplicationIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_application_iam_member#condition BeyondcorpApplicationIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_application_iam_member#id BeyondcorpApplicationIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_application_iam_member#project BeyondcorpApplicationIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.putCondition"></a>

```java
public void putCondition(BeyondcorpApplicationIamMemberCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberCondition">BeyondcorpApplicationIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BeyondcorpApplicationIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.isConstruct"></a>

```java
import io.cdktn.providers.google.beyondcorp_application_iam_member.BeyondcorpApplicationIamMember;

BeyondcorpApplicationIamMember.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.isTerraformElement"></a>

```java
import io.cdktn.providers.google.beyondcorp_application_iam_member.BeyondcorpApplicationIamMember;

BeyondcorpApplicationIamMember.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.isTerraformResource"></a>

```java
import io.cdktn.providers.google.beyondcorp_application_iam_member.BeyondcorpApplicationIamMember;

BeyondcorpApplicationIamMember.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.beyondcorp_application_iam_member.BeyondcorpApplicationIamMember;

BeyondcorpApplicationIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BeyondcorpApplicationIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BeyondcorpApplicationIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BeyondcorpApplicationIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BeyondcorpApplicationIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_application_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BeyondcorpApplicationIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference">BeyondcorpApplicationIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberCondition">BeyondcorpApplicationIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.memberInput">memberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.securityGatewaysIdInput">securityGatewaysIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.member">member</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.securityGatewaysId">securityGatewaysId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.condition"></a>

```java
public BeyondcorpApplicationIamMemberConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference">BeyondcorpApplicationIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.conditionInput"></a>

```java
public BeyondcorpApplicationIamMemberCondition getConditionInput();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberCondition">BeyondcorpApplicationIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.memberInput"></a>

```java
public java.lang.String getMemberInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `securityGatewaysIdInput`<sup>Optional</sup> <a name="securityGatewaysIdInput" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.securityGatewaysIdInput"></a>

```java
public java.lang.String getSecurityGatewaysIdInput();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `securityGatewaysId`<sup>Required</sup> <a name="securityGatewaysId" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.securityGatewaysId"></a>

```java
public java.lang.String getSecurityGatewaysId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMember.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BeyondcorpApplicationIamMemberCondition <a name="BeyondcorpApplicationIamMemberCondition" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberCondition.Initializer"></a>

```java
import io.cdktn.providers.google.beyondcorp_application_iam_member.BeyondcorpApplicationIamMemberCondition;

BeyondcorpApplicationIamMemberCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_application_iam_member#expression BeyondcorpApplicationIamMember#expression}. |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_application_iam_member#title BeyondcorpApplicationIamMember#title}. |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_application_iam_member#description BeyondcorpApplicationIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_application_iam_member#expression BeyondcorpApplicationIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_application_iam_member#title BeyondcorpApplicationIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_application_iam_member#description BeyondcorpApplicationIamMember#description}.

---

### BeyondcorpApplicationIamMemberConfig <a name="BeyondcorpApplicationIamMemberConfig" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConfig.Initializer"></a>

```java
import io.cdktn.providers.google.beyondcorp_application_iam_member.BeyondcorpApplicationIamMemberConfig;

BeyondcorpApplicationIamMemberConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .member(java.lang.String)
    .role(java.lang.String)
    .securityGatewaysId(java.lang.String)
//  .condition(BeyondcorpApplicationIamMemberCondition)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_application_iam_member#application_id BeyondcorpApplicationIamMember#application_id}. |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConfig.property.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_application_iam_member#member BeyondcorpApplicationIamMember#member}. |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_application_iam_member#role BeyondcorpApplicationIamMember#role}. |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConfig.property.securityGatewaysId">securityGatewaysId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_application_iam_member#security_gateways_id BeyondcorpApplicationIamMember#security_gateways_id}. |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberCondition">BeyondcorpApplicationIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_application_iam_member#id BeyondcorpApplicationIamMember#id}. |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_application_iam_member#project BeyondcorpApplicationIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_application_iam_member#application_id BeyondcorpApplicationIamMember#application_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConfig.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_application_iam_member#member BeyondcorpApplicationIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_application_iam_member#role BeyondcorpApplicationIamMember#role}.

---

##### `securityGatewaysId`<sup>Required</sup> <a name="securityGatewaysId" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConfig.property.securityGatewaysId"></a>

```java
public java.lang.String getSecurityGatewaysId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_application_iam_member#security_gateways_id BeyondcorpApplicationIamMember#security_gateways_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConfig.property.condition"></a>

```java
public BeyondcorpApplicationIamMemberCondition getCondition();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberCondition">BeyondcorpApplicationIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_application_iam_member#condition BeyondcorpApplicationIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_application_iam_member#id BeyondcorpApplicationIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/beyondcorp_application_iam_member#project BeyondcorpApplicationIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### BeyondcorpApplicationIamMemberConditionOutputReference <a name="BeyondcorpApplicationIamMemberConditionOutputReference" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.beyondcorp_application_iam_member.BeyondcorpApplicationIamMemberConditionOutputReference;

new BeyondcorpApplicationIamMemberConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberCondition">BeyondcorpApplicationIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberConditionOutputReference.property.internalValue"></a>

```java
public BeyondcorpApplicationIamMemberCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpApplicationIamMember.BeyondcorpApplicationIamMemberCondition">BeyondcorpApplicationIamMemberCondition</a>

---



