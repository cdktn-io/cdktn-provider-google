# `organizationIamCustomRole` Submodule <a name="`organizationIamCustomRole` Submodule" id="@cdktn/provider-google.organizationIamCustomRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationIamCustomRole <a name="OrganizationIamCustomRole" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/organization_iam_custom_role google_organization_iam_custom_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer"></a>

```java
import io.cdktn.providers.google.organization_iam_custom_role.OrganizationIamCustomRole;

OrganizationIamCustomRole.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .orgId(java.lang.String)
    .permissions(java.util.List<java.lang.String>)
    .roleId(java.lang.String)
    .title(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .stage(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer.parameter.orgId">orgId</a></code> | <code>java.lang.String</code> | The numeric ID of the organization in which you want to create a custom role. |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer.parameter.permissions">permissions</a></code> | <code>java.util.List<java.lang.String></code> | The names of the permissions this role grants when bound in an IAM policy. |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer.parameter.roleId">roleId</a></code> | <code>java.lang.String</code> | The role id to use for this role. |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer.parameter.title">title</a></code> | <code>java.lang.String</code> | A human-readable title for the role. |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A human-readable description for the role. |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/organization_iam_custom_role#id OrganizationIamCustomRole#id}. |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer.parameter.stage">stage</a></code> | <code>java.lang.String</code> | The current launch stage of the role. Defaults to GA. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer.parameter.orgId"></a>

- *Type:* java.lang.String

The numeric ID of the organization in which you want to create a custom role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/organization_iam_custom_role#org_id OrganizationIamCustomRole#org_id}

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer.parameter.permissions"></a>

- *Type:* java.util.List<java.lang.String>

The names of the permissions this role grants when bound in an IAM policy.

At least one permission must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/organization_iam_custom_role#permissions OrganizationIamCustomRole#permissions}

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer.parameter.roleId"></a>

- *Type:* java.lang.String

The role id to use for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/organization_iam_custom_role#role_id OrganizationIamCustomRole#role_id}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer.parameter.title"></a>

- *Type:* java.lang.String

A human-readable title for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/organization_iam_custom_role#title OrganizationIamCustomRole#title}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/organization_iam_custom_role#deletion_policy OrganizationIamCustomRole#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A human-readable description for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/organization_iam_custom_role#description OrganizationIamCustomRole#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/organization_iam_custom_role#id OrganizationIamCustomRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.Initializer.parameter.stage"></a>

- *Type:* java.lang.String

The current launch stage of the role. Defaults to GA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/organization_iam_custom_role#stage OrganizationIamCustomRole#stage}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.resetStage">resetStage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.resetId"></a>

```java
public void resetId()
```

##### `resetStage` <a name="resetStage" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.resetStage"></a>

```java
public void resetStage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OrganizationIamCustomRole resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.isConstruct"></a>

```java
import io.cdktn.providers.google.organization_iam_custom_role.OrganizationIamCustomRole;

OrganizationIamCustomRole.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.isTerraformElement"></a>

```java
import io.cdktn.providers.google.organization_iam_custom_role.OrganizationIamCustomRole;

OrganizationIamCustomRole.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.isTerraformResource"></a>

```java
import io.cdktn.providers.google.organization_iam_custom_role.OrganizationIamCustomRole;

OrganizationIamCustomRole.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.organization_iam_custom_role.OrganizationIamCustomRole;

OrganizationIamCustomRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OrganizationIamCustomRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OrganizationIamCustomRole resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OrganizationIamCustomRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OrganizationIamCustomRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/organization_iam_custom_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OrganizationIamCustomRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.deleted">deleted</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.orgIdInput">orgIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.permissionsInput">permissionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.roleIdInput">roleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.stageInput">stageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.orgId">orgId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.permissions">permissions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.roleId">roleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.stage">stage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `deleted`<sup>Required</sup> <a name="deleted" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.deleted"></a>

```java
public IResolvable getDeleted();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.orgIdInput"></a>

```java
public java.lang.String getOrgIdInput();
```

- *Type:* java.lang.String

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.permissionsInput"></a>

```java
public java.util.List<java.lang.String> getPermissionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `roleIdInput`<sup>Optional</sup> <a name="roleIdInput" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.roleIdInput"></a>

```java
public java.lang.String getRoleIdInput();
```

- *Type:* java.lang.String

---

##### `stageInput`<sup>Optional</sup> <a name="stageInput" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.stageInput"></a>

```java
public java.lang.String getStageInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.permissions"></a>

```java
public java.util.List<java.lang.String> getPermissions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.roleId"></a>

```java
public java.lang.String getRoleId();
```

- *Type:* java.lang.String

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.stage"></a>

```java
public java.lang.String getStage();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRole.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationIamCustomRoleConfig <a name="OrganizationIamCustomRoleConfig" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRoleConfig.Initializer"></a>

```java
import io.cdktn.providers.google.organization_iam_custom_role.OrganizationIamCustomRoleConfig;

OrganizationIamCustomRoleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .orgId(java.lang.String)
    .permissions(java.util.List<java.lang.String>)
    .roleId(java.lang.String)
    .title(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .stage(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRoleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRoleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRoleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRoleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRoleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRoleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRoleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRoleConfig.property.orgId">orgId</a></code> | <code>java.lang.String</code> | The numeric ID of the organization in which you want to create a custom role. |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRoleConfig.property.permissions">permissions</a></code> | <code>java.util.List<java.lang.String></code> | The names of the permissions this role grants when bound in an IAM policy. |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRoleConfig.property.roleId">roleId</a></code> | <code>java.lang.String</code> | The role id to use for this role. |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRoleConfig.property.title">title</a></code> | <code>java.lang.String</code> | A human-readable title for the role. |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRoleConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRoleConfig.property.description">description</a></code> | <code>java.lang.String</code> | A human-readable description for the role. |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRoleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/organization_iam_custom_role#id OrganizationIamCustomRole#id}. |
| <code><a href="#@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRoleConfig.property.stage">stage</a></code> | <code>java.lang.String</code> | The current launch stage of the role. Defaults to GA. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRoleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRoleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRoleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRoleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRoleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRoleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRoleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRoleConfig.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

The numeric ID of the organization in which you want to create a custom role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/organization_iam_custom_role#org_id OrganizationIamCustomRole#org_id}

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRoleConfig.property.permissions"></a>

```java
public java.util.List<java.lang.String> getPermissions();
```

- *Type:* java.util.List<java.lang.String>

The names of the permissions this role grants when bound in an IAM policy.

At least one permission must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/organization_iam_custom_role#permissions OrganizationIamCustomRole#permissions}

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRoleConfig.property.roleId"></a>

```java
public java.lang.String getRoleId();
```

- *Type:* java.lang.String

The role id to use for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/organization_iam_custom_role#role_id OrganizationIamCustomRole#role_id}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRoleConfig.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

A human-readable title for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/organization_iam_custom_role#title OrganizationIamCustomRole#title}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRoleConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/organization_iam_custom_role#deletion_policy OrganizationIamCustomRole#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRoleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-readable description for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/organization_iam_custom_role#description OrganizationIamCustomRole#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRoleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/organization_iam_custom_role#id OrganizationIamCustomRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktn/provider-google.organizationIamCustomRole.OrganizationIamCustomRoleConfig.property.stage"></a>

```java
public java.lang.String getStage();
```

- *Type:* java.lang.String

The current launch stage of the role. Defaults to GA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/organization_iam_custom_role#stage OrganizationIamCustomRole#stage}

---



