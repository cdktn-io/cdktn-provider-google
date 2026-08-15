# `iamOrganizationAccessPolicy` Submodule <a name="`iamOrganizationAccessPolicy` Submodule" id="@cdktn/provider-google.iamOrganizationAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamOrganizationAccessPolicy <a name="IamOrganizationAccessPolicy" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy google_iam_organization_access_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer"></a>

```java
import io.cdktn.providers.google.iam_organization_access_policy.IamOrganizationAccessPolicy;

IamOrganizationAccessPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessPolicyId(java.lang.String)
    .location(java.lang.String)
    .organization(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .details(IamOrganizationAccessPolicyDetails)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(IamOrganizationAccessPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.accessPolicyId">accessPolicyId</a></code> | <code>java.lang.String</code> | The ID to use for the access policy, which will become the final component of the access policy's resource name. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.details">details</a></code> | <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetails">IamOrganizationAccessPolicyDetails</a></code> | details block. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The description of the access policy. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#id IamOrganizationAccessPolicy#id}. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeouts">IamOrganizationAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessPolicyId`<sup>Required</sup> <a name="accessPolicyId" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.accessPolicyId"></a>

- *Type:* java.lang.String

The ID to use for the access policy, which will become the final component of the access policy's resource name.

This value must start with a lowercase letter followed by up to 62
lowercase letters, numbers, hyphens, or dots. Pattern,
/a-z{2,62}/.
This value must be unique among all access policies with the same parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#access_policy_id IamOrganizationAccessPolicy#access_policy_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#location IamOrganizationAccessPolicy#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#organization IamOrganizationAccessPolicy#organization}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#annotations IamOrganizationAccessPolicy#annotations}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#deletion_policy IamOrganizationAccessPolicy#deletion_policy}

---

##### `details`<sup>Optional</sup> <a name="details" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.details"></a>

- *Type:* <a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetails">IamOrganizationAccessPolicyDetails</a>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#details IamOrganizationAccessPolicy#details}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The description of the access policy. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#display_name IamOrganizationAccessPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#id IamOrganizationAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeouts">IamOrganizationAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#timeouts IamOrganizationAccessPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.putDetails">putDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.resetDetails">resetDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDetails` <a name="putDetails" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.putDetails"></a>

```java
public void putDetails(IamOrganizationAccessPolicyDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.putDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetails">IamOrganizationAccessPolicyDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.putTimeouts"></a>

```java
public void putTimeouts(IamOrganizationAccessPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeouts">IamOrganizationAccessPolicyTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDetails` <a name="resetDetails" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.resetDetails"></a>

```java
public void resetDetails()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IamOrganizationAccessPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.isConstruct"></a>

```java
import io.cdktn.providers.google.iam_organization_access_policy.IamOrganizationAccessPolicy;

IamOrganizationAccessPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.google.iam_organization_access_policy.IamOrganizationAccessPolicy;

IamOrganizationAccessPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.google.iam_organization_access_policy.IamOrganizationAccessPolicy;

IamOrganizationAccessPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.iam_organization_access_policy.IamOrganizationAccessPolicy;

IamOrganizationAccessPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IamOrganizationAccessPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IamOrganizationAccessPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IamOrganizationAccessPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IamOrganizationAccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IamOrganizationAccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.details">details</a></code> | <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference">IamOrganizationAccessPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference">IamOrganizationAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.accessPolicyIdInput">accessPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.detailsInput">detailsInput</a></code> | <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetails">IamOrganizationAccessPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeouts">IamOrganizationAccessPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.accessPolicyId">accessPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.details"></a>

```java
public IamOrganizationAccessPolicyDetailsOutputReference getDetails();
```

- *Type:* <a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference">IamOrganizationAccessPolicyDetailsOutputReference</a>

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.timeouts"></a>

```java
public IamOrganizationAccessPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference">IamOrganizationAccessPolicyTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `accessPolicyIdInput`<sup>Optional</sup> <a name="accessPolicyIdInput" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.accessPolicyIdInput"></a>

```java
public java.lang.String getAccessPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `detailsInput`<sup>Optional</sup> <a name="detailsInput" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.detailsInput"></a>

```java
public IamOrganizationAccessPolicyDetails getDetailsInput();
```

- *Type:* <a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetails">IamOrganizationAccessPolicyDetails</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.timeoutsInput"></a>

```java
public IResolvable|IamOrganizationAccessPolicyTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeouts">IamOrganizationAccessPolicyTimeouts</a>

---

##### `accessPolicyId`<sup>Required</sup> <a name="accessPolicyId" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.accessPolicyId"></a>

```java
public java.lang.String getAccessPolicyId();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IamOrganizationAccessPolicyConfig <a name="IamOrganizationAccessPolicyConfig" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.google.iam_organization_access_policy.IamOrganizationAccessPolicyConfig;

IamOrganizationAccessPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessPolicyId(java.lang.String)
    .location(java.lang.String)
    .organization(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .details(IamOrganizationAccessPolicyDetails)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(IamOrganizationAccessPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyConfig.property.accessPolicyId">accessPolicyId</a></code> | <code>java.lang.String</code> | The ID to use for the access policy, which will become the final component of the access policy's resource name. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyConfig.property.details">details</a></code> | <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetails">IamOrganizationAccessPolicyDetails</a></code> | details block. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The description of the access policy. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#id IamOrganizationAccessPolicy#id}. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeouts">IamOrganizationAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessPolicyId`<sup>Required</sup> <a name="accessPolicyId" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyConfig.property.accessPolicyId"></a>

```java
public java.lang.String getAccessPolicyId();
```

- *Type:* java.lang.String

The ID to use for the access policy, which will become the final component of the access policy's resource name.

This value must start with a lowercase letter followed by up to 62
lowercase letters, numbers, hyphens, or dots. Pattern,
/a-z{2,62}/.
This value must be unique among all access policies with the same parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#access_policy_id IamOrganizationAccessPolicy#access_policy_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#location IamOrganizationAccessPolicy#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#organization IamOrganizationAccessPolicy#organization}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#annotations IamOrganizationAccessPolicy#annotations}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#deletion_policy IamOrganizationAccessPolicy#deletion_policy}

---

##### `details`<sup>Optional</sup> <a name="details" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyConfig.property.details"></a>

```java
public IamOrganizationAccessPolicyDetails getDetails();
```

- *Type:* <a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetails">IamOrganizationAccessPolicyDetails</a>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#details IamOrganizationAccessPolicy#details}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The description of the access policy. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#display_name IamOrganizationAccessPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#id IamOrganizationAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyConfig.property.timeouts"></a>

```java
public IamOrganizationAccessPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeouts">IamOrganizationAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#timeouts IamOrganizationAccessPolicy#timeouts}

---

### IamOrganizationAccessPolicyDetails <a name="IamOrganizationAccessPolicyDetails" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetails.Initializer"></a>

```java
import io.cdktn.providers.google.iam_organization_access_policy.IamOrganizationAccessPolicyDetails;

IamOrganizationAccessPolicyDetails.builder()
    .rules(IResolvable|java.util.List<IamOrganizationAccessPolicyDetailsRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetails.property.rules">rules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRules">IamOrganizationAccessPolicyDetailsRules</a>></code> | rules block. |

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetails.property.rules"></a>

```java
public IResolvable|java.util.List<IamOrganizationAccessPolicyDetailsRules> getRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRules">IamOrganizationAccessPolicyDetailsRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#rules IamOrganizationAccessPolicy#rules}

---

### IamOrganizationAccessPolicyDetailsRules <a name="IamOrganizationAccessPolicyDetailsRules" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRules.Initializer"></a>

```java
import io.cdktn.providers.google.iam_organization_access_policy.IamOrganizationAccessPolicyDetailsRules;

IamOrganizationAccessPolicyDetailsRules.builder()
    .effect(java.lang.String)
    .operation(IamOrganizationAccessPolicyDetailsRulesOperation)
    .principals(java.util.List<java.lang.String>)
//  .conditions(IResolvable|java.util.List<IamOrganizationAccessPolicyDetailsRulesConditions>)
//  .description(java.lang.String)
//  .excludedPrincipals(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRules.property.effect">effect</a></code> | <code>java.lang.String</code> | The effect of the rule. Possible values: DENY ALLOW Possible values: ["DENY", "ALLOW"]. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRules.property.operation">operation</a></code> | <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperation">IamOrganizationAccessPolicyDetailsRulesOperation</a></code> | operation block. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRules.property.principals">principals</a></code> | <code>java.util.List<java.lang.String></code> | The identities for which this rule's effect governs using one or more permissions on Google Cloud resources. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRules.property.conditions">conditions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditions">IamOrganizationAccessPolicyDetailsRulesConditions</a>></code> | conditions block. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRules.property.description">description</a></code> | <code>java.lang.String</code> | Customer specified description of the rule. Must be less than or equal to 256 characters. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRules.property.excludedPrincipals">excludedPrincipals</a></code> | <code>java.util.List<java.lang.String></code> | The identities that are excluded from the access policy rule, even if they are listed in the 'principals'. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRules.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

The effect of the rule. Possible values: DENY ALLOW Possible values: ["DENY", "ALLOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#effect IamOrganizationAccessPolicy#effect}

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRules.property.operation"></a>

```java
public IamOrganizationAccessPolicyDetailsRulesOperation getOperation();
```

- *Type:* <a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperation">IamOrganizationAccessPolicyDetailsRulesOperation</a>

operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#operation IamOrganizationAccessPolicy#operation}

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRules.property.principals"></a>

```java
public java.util.List<java.lang.String> getPrincipals();
```

- *Type:* java.util.List<java.lang.String>

The identities for which this rule's effect governs using one or more permissions on Google Cloud resources.

This field can contain the
following values:

* 'principal://goog/subject/{email_id}': A specific Google Account.
  Includes Gmail, Cloud Identity, and Google Workspace user accounts. For
  example, 'principal://goog/subject/alice@example.com'.
* 'principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id}':
  A Google Cloud service account. For example,
  'principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com'.
* 'principalSet://goog/group/{group_id}': A Google group. For example,
  'principalSet://goog/group/admins@example.com'.
* 'principalSet://goog/cloudIdentityCustomerId/{customer_id}': All of the
  principals associated with the specified Google Workspace or Cloud
  Identity customer ID. For example,
  'principalSet://goog/cloudIdentityCustomerId/C01Abc35'.
  If an identifier that was previously set on a policy is soft deleted, then
  calls to read that policy will return the identifier with a deleted
  prefix. Users cannot set identifiers with this syntax.
* 'deleted:principal://goog/subject/{email_id}?uid={uid}': A specific
  Google Account that was deleted recently. For example,
  'deleted:principal://goog/subject/alice@example.com?uid=1234567890'. If
  the Google Account is recovered, this identifier reverts to the standard
  identifier for a Google Account.
* 'deleted:principalSet://goog/group/{group_id}?uid={uid}': A Google group
  that was deleted recently. For example,
  'deleted:principalSet://goog/group/admins@example.com?uid=1234567890'.
  If the Google group is restored, this identifier reverts to the standard
  identifier for a Google group.
* 'deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id}?uid={uid}':
  A Google Cloud service account that was deleted recently. For example,
  'deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com?uid=1234567890'.
  If the service account is undeleted, this identifier reverts to the
  standard identifier for a service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#principals IamOrganizationAccessPolicy#principals}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRules.property.conditions"></a>

```java
public IResolvable|java.util.List<IamOrganizationAccessPolicyDetailsRulesConditions> getConditions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditions">IamOrganizationAccessPolicyDetailsRulesConditions</a>>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#conditions IamOrganizationAccessPolicy#conditions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRules.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Customer specified description of the rule. Must be less than or equal to 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#description IamOrganizationAccessPolicy#description}

---

##### `excludedPrincipals`<sup>Optional</sup> <a name="excludedPrincipals" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRules.property.excludedPrincipals"></a>

```java
public java.util.List<java.lang.String> getExcludedPrincipals();
```

- *Type:* java.util.List<java.lang.String>

The identities that are excluded from the access policy rule, even if they are listed in the 'principals'.

For example, you could add a Google
group to the 'principals', then exclude specific users who belong to
that group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#excluded_principals IamOrganizationAccessPolicy#excluded_principals}

---

### IamOrganizationAccessPolicyDetailsRulesConditions <a name="IamOrganizationAccessPolicyDetailsRulesConditions" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditions.Initializer"></a>

```java
import io.cdktn.providers.google.iam_organization_access_policy.IamOrganizationAccessPolicyDetailsRulesConditions;

IamOrganizationAccessPolicyDetailsRulesConditions.builder()
    .service(java.lang.String)
//  .expression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditions.property.service">service</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#service IamOrganizationAccessPolicy#service}. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditions.property.expression">expression</a></code> | <code>java.lang.String</code> | Textual representation of an expression in Common Expression Language syntax. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditions.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#service IamOrganizationAccessPolicy#service}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditions.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#expression IamOrganizationAccessPolicy#expression}

---

### IamOrganizationAccessPolicyDetailsRulesOperation <a name="IamOrganizationAccessPolicyDetailsRulesOperation" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperation.Initializer"></a>

```java
import io.cdktn.providers.google.iam_organization_access_policy.IamOrganizationAccessPolicyDetailsRulesOperation;

IamOrganizationAccessPolicyDetailsRulesOperation.builder()
    .permissions(java.util.List<java.lang.String>)
//  .excludedPermissions(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperation.property.permissions">permissions</a></code> | <code>java.util.List<java.lang.String></code> | The permissions that are explicitly affected by this rule. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperation.property.excludedPermissions">excludedPermissions</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the permissions that this rule excludes from the set of affected permissions given by 'permissions'. |

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperation.property.permissions"></a>

```java
public java.util.List<java.lang.String> getPermissions();
```

- *Type:* java.util.List<java.lang.String>

The permissions that are explicitly affected by this rule.

Each
permission uses the format '{service_fqdn}/{resource}.{verb}', where
'{service_fqdn}' is the fully qualified domain name for the service.
Currently supported permissions are as follows:

* 'eventarc.googleapis.com/messageBuses.publish'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#permissions IamOrganizationAccessPolicy#permissions}

---

##### `excludedPermissions`<sup>Optional</sup> <a name="excludedPermissions" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperation.property.excludedPermissions"></a>

```java
public java.util.List<java.lang.String> getExcludedPermissions();
```

- *Type:* java.util.List<java.lang.String>

Specifies the permissions that this rule excludes from the set of affected permissions given by 'permissions'.

If a permission appears in
'permissions' *and* in 'excluded_permissions' then it will *not* be
subject to the policy effect.
The excluded permissions can be specified using the same syntax as
'permissions'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#excluded_permissions IamOrganizationAccessPolicy#excluded_permissions}

---

### IamOrganizationAccessPolicyTimeouts <a name="IamOrganizationAccessPolicyTimeouts" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.iam_organization_access_policy.IamOrganizationAccessPolicyTimeouts;

IamOrganizationAccessPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#create IamOrganizationAccessPolicy#create}. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#delete IamOrganizationAccessPolicy#delete}. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#update IamOrganizationAccessPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#create IamOrganizationAccessPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#delete IamOrganizationAccessPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_organization_access_policy#update IamOrganizationAccessPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamOrganizationAccessPolicyDetailsOutputReference <a name="IamOrganizationAccessPolicyDetailsOutputReference" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.iam_organization_access_policy.IamOrganizationAccessPolicyDetailsOutputReference;

new IamOrganizationAccessPolicyDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.putRules">putRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.putRules"></a>

```java
public void putRules(IResolvable|java.util.List<IamOrganizationAccessPolicyDetailsRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.putRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRules">IamOrganizationAccessPolicyDetailsRules</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesList">IamOrganizationAccessPolicyDetailsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.property.rulesInput">rulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRules">IamOrganizationAccessPolicyDetailsRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetails">IamOrganizationAccessPolicyDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.property.rules"></a>

```java
public IamOrganizationAccessPolicyDetailsRulesList getRules();
```

- *Type:* <a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesList">IamOrganizationAccessPolicyDetailsRulesList</a>

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.property.rulesInput"></a>

```java
public IResolvable|java.util.List<IamOrganizationAccessPolicyDetailsRules> getRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRules">IamOrganizationAccessPolicyDetailsRules</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsOutputReference.property.internalValue"></a>

```java
public IamOrganizationAccessPolicyDetails getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetails">IamOrganizationAccessPolicyDetails</a>

---


### IamOrganizationAccessPolicyDetailsRulesConditionsList <a name="IamOrganizationAccessPolicyDetailsRulesConditionsList" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsList.Initializer"></a>

```java
import io.cdktn.providers.google.iam_organization_access_policy.IamOrganizationAccessPolicyDetailsRulesConditionsList;

new IamOrganizationAccessPolicyDetailsRulesConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsList.get"></a>

```java
public IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditions">IamOrganizationAccessPolicyDetailsRulesConditions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IamOrganizationAccessPolicyDetailsRulesConditions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditions">IamOrganizationAccessPolicyDetailsRulesConditions</a>>

---


### IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference <a name="IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.iam_organization_access_policy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference;

new IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.resetExpression">resetExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpression` <a name="resetExpression" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.resetExpression"></a>

```java
public void resetExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditions">IamOrganizationAccessPolicyDetailsRulesConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.internalValue"></a>

```java
public IResolvable|IamOrganizationAccessPolicyDetailsRulesConditions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditions">IamOrganizationAccessPolicyDetailsRulesConditions</a>

---


### IamOrganizationAccessPolicyDetailsRulesList <a name="IamOrganizationAccessPolicyDetailsRulesList" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesList.Initializer"></a>

```java
import io.cdktn.providers.google.iam_organization_access_policy.IamOrganizationAccessPolicyDetailsRulesList;

new IamOrganizationAccessPolicyDetailsRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesList.get"></a>

```java
public IamOrganizationAccessPolicyDetailsRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRules">IamOrganizationAccessPolicyDetailsRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IamOrganizationAccessPolicyDetailsRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRules">IamOrganizationAccessPolicyDetailsRules</a>>

---


### IamOrganizationAccessPolicyDetailsRulesOperationOutputReference <a name="IamOrganizationAccessPolicyDetailsRulesOperationOutputReference" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.iam_organization_access_policy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference;

new IamOrganizationAccessPolicyDetailsRulesOperationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.resetExcludedPermissions">resetExcludedPermissions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludedPermissions` <a name="resetExcludedPermissions" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.resetExcludedPermissions"></a>

```java
public void resetExcludedPermissions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissionsInput">excludedPermissionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.permissionsInput">permissionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissions">excludedPermissions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.permissions">permissions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperation">IamOrganizationAccessPolicyDetailsRulesOperation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludedPermissionsInput`<sup>Optional</sup> <a name="excludedPermissionsInput" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissionsInput"></a>

```java
public java.util.List<java.lang.String> getExcludedPermissionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.permissionsInput"></a>

```java
public java.util.List<java.lang.String> getPermissionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedPermissions`<sup>Required</sup> <a name="excludedPermissions" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissions"></a>

```java
public java.util.List<java.lang.String> getExcludedPermissions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.permissions"></a>

```java
public java.util.List<java.lang.String> getPermissions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.internalValue"></a>

```java
public IamOrganizationAccessPolicyDetailsRulesOperation getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperation">IamOrganizationAccessPolicyDetailsRulesOperation</a>

---


### IamOrganizationAccessPolicyDetailsRulesOutputReference <a name="IamOrganizationAccessPolicyDetailsRulesOutputReference" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.iam_organization_access_policy.IamOrganizationAccessPolicyDetailsRulesOutputReference;

new IamOrganizationAccessPolicyDetailsRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.putOperation">putOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.resetExcludedPrincipals">resetExcludedPrincipals</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditions` <a name="putConditions" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.putConditions"></a>

```java
public void putConditions(IResolvable|java.util.List<IamOrganizationAccessPolicyDetailsRulesConditions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.putConditions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditions">IamOrganizationAccessPolicyDetailsRulesConditions</a>>

---

##### `putOperation` <a name="putOperation" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.putOperation"></a>

```java
public void putOperation(IamOrganizationAccessPolicyDetailsRulesOperation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.putOperation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperation">IamOrganizationAccessPolicyDetailsRulesOperation</a>

---

##### `resetConditions` <a name="resetConditions" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.resetConditions"></a>

```java
public void resetConditions()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExcludedPrincipals` <a name="resetExcludedPrincipals" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.resetExcludedPrincipals"></a>

```java
public void resetExcludedPrincipals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsList">IamOrganizationAccessPolicyDetailsRulesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.property.operation">operation</a></code> | <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference">IamOrganizationAccessPolicyDetailsRulesOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditions">IamOrganizationAccessPolicyDetailsRulesConditions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.property.effectInput">effectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.property.excludedPrincipalsInput">excludedPrincipalsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.property.operationInput">operationInput</a></code> | <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperation">IamOrganizationAccessPolicyDetailsRulesOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.property.principalsInput">principalsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.property.effect">effect</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.property.excludedPrincipals">excludedPrincipals</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.property.principals">principals</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRules">IamOrganizationAccessPolicyDetailsRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.property.conditions"></a>

```java
public IamOrganizationAccessPolicyDetailsRulesConditionsList getConditions();
```

- *Type:* <a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditionsList">IamOrganizationAccessPolicyDetailsRulesConditionsList</a>

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.property.operation"></a>

```java
public IamOrganizationAccessPolicyDetailsRulesOperationOutputReference getOperation();
```

- *Type:* <a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperationOutputReference">IamOrganizationAccessPolicyDetailsRulesOperationOutputReference</a>

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.property.conditionsInput"></a>

```java
public IResolvable|java.util.List<IamOrganizationAccessPolicyDetailsRulesConditions> getConditionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesConditions">IamOrganizationAccessPolicyDetailsRulesConditions</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.property.effectInput"></a>

```java
public java.lang.String getEffectInput();
```

- *Type:* java.lang.String

---

##### `excludedPrincipalsInput`<sup>Optional</sup> <a name="excludedPrincipalsInput" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.property.excludedPrincipalsInput"></a>

```java
public java.util.List<java.lang.String> getExcludedPrincipalsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.property.operationInput"></a>

```java
public IamOrganizationAccessPolicyDetailsRulesOperation getOperationInput();
```

- *Type:* <a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOperation">IamOrganizationAccessPolicyDetailsRulesOperation</a>

---

##### `principalsInput`<sup>Optional</sup> <a name="principalsInput" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.property.principalsInput"></a>

```java
public java.util.List<java.lang.String> getPrincipalsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

---

##### `excludedPrincipals`<sup>Required</sup> <a name="excludedPrincipals" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.property.excludedPrincipals"></a>

```java
public java.util.List<java.lang.String> getExcludedPrincipals();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.property.principals"></a>

```java
public java.util.List<java.lang.String> getPrincipals();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|IamOrganizationAccessPolicyDetailsRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyDetailsRules">IamOrganizationAccessPolicyDetailsRules</a>

---


### IamOrganizationAccessPolicyTimeoutsOutputReference <a name="IamOrganizationAccessPolicyTimeoutsOutputReference" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.iam_organization_access_policy.IamOrganizationAccessPolicyTimeoutsOutputReference;

new IamOrganizationAccessPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeouts">IamOrganizationAccessPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|IamOrganizationAccessPolicyTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.iamOrganizationAccessPolicy.IamOrganizationAccessPolicyTimeouts">IamOrganizationAccessPolicyTimeouts</a>

---



