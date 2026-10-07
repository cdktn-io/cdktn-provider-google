# `cesDeployment` Submodule <a name="`cesDeployment` Submodule" id="@cdktn/provider-google.cesDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CesDeployment <a name="CesDeployment" id="@cdktn/provider-google.cesDeployment.CesDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment google_ces_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer"></a>

```java
import io.cdktn.providers.google.ces_deployment.CesDeployment;

CesDeployment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .app(java.lang.String)
    .appVersion(java.lang.String)
    .channelProfile(CesDeploymentChannelProfile)
    .displayName(java.lang.String)
    .location(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .instagramCredentials(CesDeploymentInstagramCredentials)
//  .project(java.lang.String)
//  .timeouts(CesDeploymentTimeouts)
//  .whatsappCredentials(CesDeploymentWhatsappCredentials)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.app">app</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.appVersion">appVersion</a></code> | <code>java.lang.String</code> | The resource name of the app version to deploy. Format: projects/{project}/locations/{location}/apps/{app}/versions/{version}. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.channelProfile">channelProfile</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile">CesDeploymentChannelProfile</a></code> | channel_profile block. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name of the deployment. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#id CesDeployment#id}. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.instagramCredentials">instagramCredentials</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials">CesDeploymentInstagramCredentials</a></code> | instagram_credentials block. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#project CesDeployment#project}. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts">CesDeploymentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.whatsappCredentials">whatsappCredentials</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials">CesDeploymentWhatsappCredentials</a></code> | whatsapp_credentials block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.app"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#app CesDeployment#app}

---

##### `appVersion`<sup>Required</sup> <a name="appVersion" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.appVersion"></a>

- *Type:* java.lang.String

The resource name of the app version to deploy. Format: projects/{project}/locations/{location}/apps/{app}/versions/{version}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#app_version CesDeployment#app_version}

---

##### `channelProfile`<sup>Required</sup> <a name="channelProfile" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.channelProfile"></a>

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile">CesDeploymentChannelProfile</a>

channel_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#channel_profile CesDeployment#channel_profile}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Display name of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#display_name CesDeployment#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#location CesDeployment#location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#deletion_policy CesDeployment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#id CesDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instagramCredentials`<sup>Optional</sup> <a name="instagramCredentials" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.instagramCredentials"></a>

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials">CesDeploymentInstagramCredentials</a>

instagram_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#instagram_credentials CesDeployment#instagram_credentials}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#project CesDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts">CesDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#timeouts CesDeployment#timeouts}

---

##### `whatsappCredentials`<sup>Optional</sup> <a name="whatsappCredentials" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.whatsappCredentials"></a>

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials">CesDeploymentWhatsappCredentials</a>

whatsapp_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#whatsapp_credentials CesDeployment#whatsapp_credentials}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.putChannelProfile">putChannelProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.putInstagramCredentials">putInstagramCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.putWhatsappCredentials">putWhatsappCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.resetInstagramCredentials">resetInstagramCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.resetWhatsappCredentials">resetWhatsappCredentials</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesDeployment.CesDeployment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cesDeployment.CesDeployment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cesDeployment.CesDeployment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.cesDeployment.CesDeployment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cesDeployment.CesDeployment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesDeployment.CesDeployment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.cesDeployment.CesDeployment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.cesDeployment.CesDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.cesDeployment.CesDeployment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.cesDeployment.CesDeployment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.cesDeployment.CesDeployment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.cesDeployment.CesDeployment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.cesDeployment.CesDeployment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cesDeployment.CesDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.cesDeployment.CesDeployment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.cesDeployment.CesDeployment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesDeployment.CesDeployment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesDeployment.CesDeployment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.cesDeployment.CesDeployment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesDeployment.CesDeployment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.cesDeployment.CesDeployment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cesDeployment.CesDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cesDeployment.CesDeployment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.cesDeployment.CesDeployment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesDeployment.CesDeployment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putChannelProfile` <a name="putChannelProfile" id="@cdktn/provider-google.cesDeployment.CesDeployment.putChannelProfile"></a>

```java
public void putChannelProfile(CesDeploymentChannelProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesDeployment.CesDeployment.putChannelProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile">CesDeploymentChannelProfile</a>

---

##### `putInstagramCredentials` <a name="putInstagramCredentials" id="@cdktn/provider-google.cesDeployment.CesDeployment.putInstagramCredentials"></a>

```java
public void putInstagramCredentials(CesDeploymentInstagramCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesDeployment.CesDeployment.putInstagramCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials">CesDeploymentInstagramCredentials</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.cesDeployment.CesDeployment.putTimeouts"></a>

```java
public void putTimeouts(CesDeploymentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesDeployment.CesDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts">CesDeploymentTimeouts</a>

---

##### `putWhatsappCredentials` <a name="putWhatsappCredentials" id="@cdktn/provider-google.cesDeployment.CesDeployment.putWhatsappCredentials"></a>

```java
public void putWhatsappCredentials(CesDeploymentWhatsappCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesDeployment.CesDeployment.putWhatsappCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials">CesDeploymentWhatsappCredentials</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.cesDeployment.CesDeployment.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.cesDeployment.CesDeployment.resetId"></a>

```java
public void resetId()
```

##### `resetInstagramCredentials` <a name="resetInstagramCredentials" id="@cdktn/provider-google.cesDeployment.CesDeployment.resetInstagramCredentials"></a>

```java
public void resetInstagramCredentials()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.cesDeployment.CesDeployment.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.cesDeployment.CesDeployment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWhatsappCredentials` <a name="resetWhatsappCredentials" id="@cdktn/provider-google.cesDeployment.CesDeployment.resetWhatsappCredentials"></a>

```java
public void resetWhatsappCredentials()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CesDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.cesDeployment.CesDeployment.isConstruct"></a>

```java
import io.cdktn.providers.google.ces_deployment.CesDeployment;

CesDeployment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesDeployment.CesDeployment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.cesDeployment.CesDeployment.isTerraformElement"></a>

```java
import io.cdktn.providers.google.ces_deployment.CesDeployment;

CesDeployment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesDeployment.CesDeployment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.cesDeployment.CesDeployment.isTerraformResource"></a>

```java
import io.cdktn.providers.google.ces_deployment.CesDeployment;

CesDeployment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesDeployment.CesDeployment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.cesDeployment.CesDeployment.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.ces_deployment.CesDeployment;

CesDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CesDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CesDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesDeployment.CesDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.cesDeployment.CesDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CesDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.cesDeployment.CesDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CesDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesDeployment.CesDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CesDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.channelProfile">channelProfile</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference">CesDeploymentChannelProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.instagramCredentials">instagramCredentials</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference">CesDeploymentInstagramCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference">CesDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.whatsappCredentials">whatsappCredentials</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference">CesDeploymentWhatsappCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.appInput">appInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.appVersionInput">appVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.channelProfileInput">channelProfileInput</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile">CesDeploymentChannelProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.instagramCredentialsInput">instagramCredentialsInput</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials">CesDeploymentInstagramCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts">CesDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.whatsappCredentialsInput">whatsappCredentialsInput</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials">CesDeploymentWhatsappCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.app">app</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.appVersion">appVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `channelProfile`<sup>Required</sup> <a name="channelProfile" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.channelProfile"></a>

```java
public CesDeploymentChannelProfileOutputReference getChannelProfile();
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference">CesDeploymentChannelProfileOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `instagramCredentials`<sup>Required</sup> <a name="instagramCredentials" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.instagramCredentials"></a>

```java
public CesDeploymentInstagramCredentialsOutputReference getInstagramCredentials();
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference">CesDeploymentInstagramCredentialsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.timeouts"></a>

```java
public CesDeploymentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference">CesDeploymentTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `whatsappCredentials`<sup>Required</sup> <a name="whatsappCredentials" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.whatsappCredentials"></a>

```java
public CesDeploymentWhatsappCredentialsOutputReference getWhatsappCredentials();
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference">CesDeploymentWhatsappCredentialsOutputReference</a>

---

##### `appInput`<sup>Optional</sup> <a name="appInput" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.appInput"></a>

```java
public java.lang.String getAppInput();
```

- *Type:* java.lang.String

---

##### `appVersionInput`<sup>Optional</sup> <a name="appVersionInput" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.appVersionInput"></a>

```java
public java.lang.String getAppVersionInput();
```

- *Type:* java.lang.String

---

##### `channelProfileInput`<sup>Optional</sup> <a name="channelProfileInput" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.channelProfileInput"></a>

```java
public CesDeploymentChannelProfile getChannelProfileInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile">CesDeploymentChannelProfile</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instagramCredentialsInput`<sup>Optional</sup> <a name="instagramCredentialsInput" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.instagramCredentialsInput"></a>

```java
public CesDeploymentInstagramCredentials getInstagramCredentialsInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials">CesDeploymentInstagramCredentials</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.timeoutsInput"></a>

```java
public IResolvable|CesDeploymentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts">CesDeploymentTimeouts</a>

---

##### `whatsappCredentialsInput`<sup>Optional</sup> <a name="whatsappCredentialsInput" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.whatsappCredentialsInput"></a>

```java
public CesDeploymentWhatsappCredentials getWhatsappCredentialsInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials">CesDeploymentWhatsappCredentials</a>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.app"></a>

```java
public java.lang.String getApp();
```

- *Type:* java.lang.String

---

##### `appVersion`<sup>Required</sup> <a name="appVersion" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.appVersion"></a>

```java
public java.lang.String getAppVersion();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CesDeploymentChannelProfile <a name="CesDeploymentChannelProfile" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.Initializer"></a>

```java
import io.cdktn.providers.google.ces_deployment.CesDeploymentChannelProfile;

CesDeploymentChannelProfile.builder()
//  .channelType(java.lang.String)
//  .disableBargeInControl(java.lang.Boolean|IResolvable)
//  .disableDtmf(java.lang.Boolean|IResolvable)
//  .personaProperty(CesDeploymentChannelProfilePersonaProperty)
//  .profileId(java.lang.String)
//  .webWidgetConfig(CesDeploymentChannelProfileWebWidgetConfig)
//  .whatsappConfig(CesDeploymentChannelProfileWhatsappConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.channelType">channelType</a></code> | <code>java.lang.String</code> | The type of the channel profile. Possible values: UNKNOWN WEB_UI API TWILIO GOOGLE_TELEPHONY_PLATFORM CONTACT_CENTER_AS_A_SERVICE FIVE9 CONTACT_CENTER_INTEGRATION WHATSAPP INSTAGRAM. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.disableBargeInControl">disableBargeInControl</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to disable user barge-in control in the conversation. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.disableDtmf">disableDtmf</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to disable DTMF (dual-tone multi-frequency). |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.personaProperty">personaProperty</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaProperty">CesDeploymentChannelProfilePersonaProperty</a></code> | persona_property block. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.profileId">profileId</a></code> | <code>java.lang.String</code> | The unique identifier of the channel profile. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.webWidgetConfig">webWidgetConfig</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig">CesDeploymentChannelProfileWebWidgetConfig</a></code> | web_widget_config block. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.whatsappConfig">whatsappConfig</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfig">CesDeploymentChannelProfileWhatsappConfig</a></code> | whatsapp_config block. |

---

##### `channelType`<sup>Optional</sup> <a name="channelType" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.channelType"></a>

```java
public java.lang.String getChannelType();
```

- *Type:* java.lang.String

The type of the channel profile. Possible values: UNKNOWN WEB_UI API TWILIO GOOGLE_TELEPHONY_PLATFORM CONTACT_CENTER_AS_A_SERVICE FIVE9 CONTACT_CENTER_INTEGRATION WHATSAPP INSTAGRAM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#channel_type CesDeployment#channel_type}

---

##### `disableBargeInControl`<sup>Optional</sup> <a name="disableBargeInControl" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.disableBargeInControl"></a>

```java
public java.lang.Boolean|IResolvable getDisableBargeInControl();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to disable user barge-in control in the conversation.

* **true**: User interruptions are disabled while the agent is speaking.
* **false**: The agent retains automatic control over when the user can
  interrupt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#disable_barge_in_control CesDeployment#disable_barge_in_control}

---

##### `disableDtmf`<sup>Optional</sup> <a name="disableDtmf" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.disableDtmf"></a>

```java
public java.lang.Boolean|IResolvable getDisableDtmf();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to disable DTMF (dual-tone multi-frequency).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#disable_dtmf CesDeployment#disable_dtmf}

---

##### `personaProperty`<sup>Optional</sup> <a name="personaProperty" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.personaProperty"></a>

```java
public CesDeploymentChannelProfilePersonaProperty getPersonaProperty();
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaProperty">CesDeploymentChannelProfilePersonaProperty</a>

persona_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#persona_property CesDeployment#persona_property}

---

##### `profileId`<sup>Optional</sup> <a name="profileId" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

The unique identifier of the channel profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#profile_id CesDeployment#profile_id}

---

##### `webWidgetConfig`<sup>Optional</sup> <a name="webWidgetConfig" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.webWidgetConfig"></a>

```java
public CesDeploymentChannelProfileWebWidgetConfig getWebWidgetConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig">CesDeploymentChannelProfileWebWidgetConfig</a>

web_widget_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#web_widget_config CesDeployment#web_widget_config}

---

##### `whatsappConfig`<sup>Optional</sup> <a name="whatsappConfig" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.whatsappConfig"></a>

```java
public CesDeploymentChannelProfileWhatsappConfig getWhatsappConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfig">CesDeploymentChannelProfileWhatsappConfig</a>

whatsapp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#whatsapp_config CesDeployment#whatsapp_config}

---

### CesDeploymentChannelProfilePersonaProperty <a name="CesDeploymentChannelProfilePersonaProperty" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaProperty.Initializer"></a>

```java
import io.cdktn.providers.google.ces_deployment.CesDeploymentChannelProfilePersonaProperty;

CesDeploymentChannelProfilePersonaProperty.builder()
//  .persona(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaProperty.property.persona">persona</a></code> | <code>java.lang.String</code> | The persona of the channel. Possible values: UNKNOWN CONCISE CHATTY. |

---

##### `persona`<sup>Optional</sup> <a name="persona" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaProperty.property.persona"></a>

```java
public java.lang.String getPersona();
```

- *Type:* java.lang.String

The persona of the channel. Possible values: UNKNOWN CONCISE CHATTY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#persona CesDeployment#persona}

---

### CesDeploymentChannelProfileWebWidgetConfig <a name="CesDeploymentChannelProfileWebWidgetConfig" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ces_deployment.CesDeploymentChannelProfileWebWidgetConfig;

CesDeploymentChannelProfileWebWidgetConfig.builder()
//  .modality(java.lang.String)
//  .securitySettings(CesDeploymentChannelProfileWebWidgetConfigSecuritySettings)
//  .theme(java.lang.String)
//  .webWidgetTitle(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig.property.modality">modality</a></code> | <code>java.lang.String</code> | The modality of the web widget. Possible values: MODALITY_UNSPECIFIED CHAT_AND_VOICE VOICE_ONLY CHAT_ONLY CHAT_VOICE_AND_VIDEO. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig.property.securitySettings">securitySettings</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings">CesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a></code> | security_settings block. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig.property.theme">theme</a></code> | <code>java.lang.String</code> | The theme of the web widget. Possible values: THEME_UNSPECIFIED LIGHT DARK. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig.property.webWidgetTitle">webWidgetTitle</a></code> | <code>java.lang.String</code> | The title of the web widget. |

---

##### `modality`<sup>Optional</sup> <a name="modality" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig.property.modality"></a>

```java
public java.lang.String getModality();
```

- *Type:* java.lang.String

The modality of the web widget. Possible values: MODALITY_UNSPECIFIED CHAT_AND_VOICE VOICE_ONLY CHAT_ONLY CHAT_VOICE_AND_VIDEO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#modality CesDeployment#modality}

---

##### `securitySettings`<sup>Optional</sup> <a name="securitySettings" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig.property.securitySettings"></a>

```java
public CesDeploymentChannelProfileWebWidgetConfigSecuritySettings getSecuritySettings();
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings">CesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a>

security_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#security_settings CesDeployment#security_settings}

---

##### `theme`<sup>Optional</sup> <a name="theme" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig.property.theme"></a>

```java
public java.lang.String getTheme();
```

- *Type:* java.lang.String

The theme of the web widget. Possible values: THEME_UNSPECIFIED LIGHT DARK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#theme CesDeployment#theme}

---

##### `webWidgetTitle`<sup>Optional</sup> <a name="webWidgetTitle" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig.property.webWidgetTitle"></a>

```java
public java.lang.String getWebWidgetTitle();
```

- *Type:* java.lang.String

The title of the web widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#web_widget_title CesDeployment#web_widget_title}

---

### CesDeploymentChannelProfileWebWidgetConfigSecuritySettings <a name="CesDeploymentChannelProfileWebWidgetConfigSecuritySettings" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings.Initializer"></a>

```java
import io.cdktn.providers.google.ces_deployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings;

CesDeploymentChannelProfileWebWidgetConfigSecuritySettings.builder()
//  .allowedOrigins(java.util.List<java.lang.String>)
//  .enableOriginCheck(java.lang.Boolean|IResolvable)
//  .enablePublicAccess(java.lang.Boolean|IResolvable)
//  .enableRecaptcha(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | The origins that are allowed to host the web widget. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.enableOriginCheck">enableOriginCheck</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether origin check for the web widget is enabled. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.enablePublicAccess">enablePublicAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether public access to the web widget is enabled. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.enableRecaptcha">enableRecaptcha</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether reCAPTCHA verification for the web widget is enabled. |

---

##### `allowedOrigins`<sup>Optional</sup> <a name="allowedOrigins" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

The origins that are allowed to host the web widget.

An origin is defined by RFC 6454. If empty, all origins are allowed. A maximum of 100 origins is allowed. Example: "https://example.com"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#allowed_origins CesDeployment#allowed_origins}

---

##### `enableOriginCheck`<sup>Optional</sup> <a name="enableOriginCheck" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.enableOriginCheck"></a>

```java
public java.lang.Boolean|IResolvable getEnableOriginCheck();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether origin check for the web widget is enabled.

If true, the web widget will check the origin of the website that loads the web widget and only allow it to be loaded in the same origin or any of the allowed origins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#enable_origin_check CesDeployment#enable_origin_check}

---

##### `enablePublicAccess`<sup>Optional</sup> <a name="enablePublicAccess" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.enablePublicAccess"></a>

```java
public java.lang.Boolean|IResolvable getEnablePublicAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether public access to the web widget is enabled.

If true, the web widget will be publicly accessible. If false, the web widget must be integrated with your own authentication and authorization system to return valid credentials for accessing the CES agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#enable_public_access CesDeployment#enable_public_access}

---

##### `enableRecaptcha`<sup>Optional</sup> <a name="enableRecaptcha" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.enableRecaptcha"></a>

```java
public java.lang.Boolean|IResolvable getEnableRecaptcha();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether reCAPTCHA verification for the web widget is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#enable_recaptcha CesDeployment#enable_recaptcha}

---

### CesDeploymentChannelProfileWhatsappConfig <a name="CesDeploymentChannelProfileWhatsappConfig" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ces_deployment.CesDeploymentChannelProfileWhatsappConfig;

CesDeploymentChannelProfileWhatsappConfig.builder()
    .phoneNumberId(java.lang.String)
    .wabaId(java.lang.String)
//  .phoneNumber(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfig.property.phoneNumberId">phoneNumberId</a></code> | <code>java.lang.String</code> | Required. The Meta phone number ID. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfig.property.wabaId">wabaId</a></code> | <code>java.lang.String</code> | Required. The WhatsApp Business Account ID. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfig.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | Optional. The phone number in E.164 format. |

---

##### `phoneNumberId`<sup>Required</sup> <a name="phoneNumberId" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfig.property.phoneNumberId"></a>

```java
public java.lang.String getPhoneNumberId();
```

- *Type:* java.lang.String

Required. The Meta phone number ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#phone_number_id CesDeployment#phone_number_id}

---

##### `wabaId`<sup>Required</sup> <a name="wabaId" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfig.property.wabaId"></a>

```java
public java.lang.String getWabaId();
```

- *Type:* java.lang.String

Required. The WhatsApp Business Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#waba_id CesDeployment#waba_id}

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfig.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

Optional. The phone number in E.164 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#phone_number CesDeployment#phone_number}

---

### CesDeploymentConfig <a name="CesDeploymentConfig" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ces_deployment.CesDeploymentConfig;

CesDeploymentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .app(java.lang.String)
    .appVersion(java.lang.String)
    .channelProfile(CesDeploymentChannelProfile)
    .displayName(java.lang.String)
    .location(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .instagramCredentials(CesDeploymentInstagramCredentials)
//  .project(java.lang.String)
//  .timeouts(CesDeploymentTimeouts)
//  .whatsappCredentials(CesDeploymentWhatsappCredentials)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.app">app</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.appVersion">appVersion</a></code> | <code>java.lang.String</code> | The resource name of the app version to deploy. Format: projects/{project}/locations/{location}/apps/{app}/versions/{version}. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.channelProfile">channelProfile</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile">CesDeploymentChannelProfile</a></code> | channel_profile block. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name of the deployment. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#id CesDeployment#id}. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.instagramCredentials">instagramCredentials</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials">CesDeploymentInstagramCredentials</a></code> | instagram_credentials block. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#project CesDeployment#project}. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts">CesDeploymentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.whatsappCredentials">whatsappCredentials</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials">CesDeploymentWhatsappCredentials</a></code> | whatsapp_credentials block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.app"></a>

```java
public java.lang.String getApp();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#app CesDeployment#app}

---

##### `appVersion`<sup>Required</sup> <a name="appVersion" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.appVersion"></a>

```java
public java.lang.String getAppVersion();
```

- *Type:* java.lang.String

The resource name of the app version to deploy. Format: projects/{project}/locations/{location}/apps/{app}/versions/{version}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#app_version CesDeployment#app_version}

---

##### `channelProfile`<sup>Required</sup> <a name="channelProfile" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.channelProfile"></a>

```java
public CesDeploymentChannelProfile getChannelProfile();
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile">CesDeploymentChannelProfile</a>

channel_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#channel_profile CesDeployment#channel_profile}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Display name of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#display_name CesDeployment#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#location CesDeployment#location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#deletion_policy CesDeployment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#id CesDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instagramCredentials`<sup>Optional</sup> <a name="instagramCredentials" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.instagramCredentials"></a>

```java
public CesDeploymentInstagramCredentials getInstagramCredentials();
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials">CesDeploymentInstagramCredentials</a>

instagram_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#instagram_credentials CesDeployment#instagram_credentials}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#project CesDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.timeouts"></a>

```java
public CesDeploymentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts">CesDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#timeouts CesDeployment#timeouts}

---

##### `whatsappCredentials`<sup>Optional</sup> <a name="whatsappCredentials" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.whatsappCredentials"></a>

```java
public CesDeploymentWhatsappCredentials getWhatsappCredentials();
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials">CesDeploymentWhatsappCredentials</a>

whatsapp_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#whatsapp_credentials CesDeployment#whatsapp_credentials}

---

### CesDeploymentInstagramCredentials <a name="CesDeploymentInstagramCredentials" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials.Initializer"></a>

```java
import io.cdktn.providers.google.ces_deployment.CesDeploymentInstagramCredentials;

CesDeploymentInstagramCredentials.builder()
//  .authCode(java.lang.String)
//  .authCodeWo(java.lang.String)
//  .authCodeWoVersion(java.lang.String)
//  .conversationProfileId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials.property.authCode">authCode</a></code> | <code>java.lang.String</code> | The Meta auth code provided by the embedded signup flow. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials.property.authCodeWo">authCodeWo</a></code> | <code>java.lang.String</code> | The Meta auth code provided by the embedded signup flow. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials.property.authCodeWoVersion">authCodeWoVersion</a></code> | <code>java.lang.String</code> | Triggers update of 'auth_code_wo' write-only. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials.property.conversationProfileId">conversationProfileId</a></code> | <code>java.lang.String</code> | The Conversation Profile ID to use for the deployment. |

---

##### `authCode`<sup>Optional</sup> <a name="authCode" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials.property.authCode"></a>

```java
public java.lang.String getAuthCode();
```

- *Type:* java.lang.String

The Meta auth code provided by the embedded signup flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#auth_code CesDeployment#auth_code}

---

##### `authCodeWo`<sup>Optional</sup> <a name="authCodeWo" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials.property.authCodeWo"></a>

```java
public java.lang.String getAuthCodeWo();
```

- *Type:* java.lang.String

The Meta auth code provided by the embedded signup flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#auth_code_wo CesDeployment#auth_code_wo}

---

##### `authCodeWoVersion`<sup>Optional</sup> <a name="authCodeWoVersion" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials.property.authCodeWoVersion"></a>

```java
public java.lang.String getAuthCodeWoVersion();
```

- *Type:* java.lang.String

Triggers update of 'auth_code_wo' write-only.

Increment this value when an update to 'auth_code_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#auth_code_wo_version CesDeployment#auth_code_wo_version}

---

##### `conversationProfileId`<sup>Optional</sup> <a name="conversationProfileId" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials.property.conversationProfileId"></a>

```java
public java.lang.String getConversationProfileId();
```

- *Type:* java.lang.String

The Conversation Profile ID to use for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#conversation_profile_id CesDeployment#conversation_profile_id}

---

### CesDeploymentTimeouts <a name="CesDeploymentTimeouts" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.ces_deployment.CesDeploymentTimeouts;

CesDeploymentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#create CesDeployment#create}. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#delete CesDeployment#delete}. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#update CesDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#create CesDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#delete CesDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#update CesDeployment#update}.

---

### CesDeploymentWhatsappCredentials <a name="CesDeploymentWhatsappCredentials" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.Initializer"></a>

```java
import io.cdktn.providers.google.ces_deployment.CesDeploymentWhatsappCredentials;

CesDeploymentWhatsappCredentials.builder()
    .businessAccountId(java.lang.String)
    .phoneNumber(java.lang.String)
    .wabaId(java.lang.String)
//  .authCode(java.lang.String)
//  .authCodeWo(java.lang.String)
//  .authCodeWoVersion(java.lang.String)
//  .conversationProfileId(java.lang.String)
//  .pin(java.lang.String)
//  .pinWo(java.lang.String)
//  .pinWoVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.businessAccountId">businessAccountId</a></code> | <code>java.lang.String</code> | The Business Account ID to use for the phone number. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | The phone number to register with WhatsApp. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.wabaId">wabaId</a></code> | <code>java.lang.String</code> | The WhatsApp Business Account ID. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.authCode">authCode</a></code> | <code>java.lang.String</code> | The Meta auth code provided by the embedded signup flow. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.authCodeWo">authCodeWo</a></code> | <code>java.lang.String</code> | The Meta auth code provided by the embedded signup flow. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.authCodeWoVersion">authCodeWoVersion</a></code> | <code>java.lang.String</code> | Triggers update of 'auth_code_wo' write-only. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.conversationProfileId">conversationProfileId</a></code> | <code>java.lang.String</code> | The Conversation Profile ID to use for the deployment. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.pin">pin</a></code> | <code>java.lang.String</code> | The 6-digit PIN created by the user for two-step verification. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.pinWo">pinWo</a></code> | <code>java.lang.String</code> | The 6-digit PIN created by the user for two-step verification. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.pinWoVersion">pinWoVersion</a></code> | <code>java.lang.String</code> | Triggers update of 'pin_wo' write-only. |

---

##### `businessAccountId`<sup>Required</sup> <a name="businessAccountId" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.businessAccountId"></a>

```java
public java.lang.String getBusinessAccountId();
```

- *Type:* java.lang.String

The Business Account ID to use for the phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#business_account_id CesDeployment#business_account_id}

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

The phone number to register with WhatsApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#phone_number CesDeployment#phone_number}

---

##### `wabaId`<sup>Required</sup> <a name="wabaId" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.wabaId"></a>

```java
public java.lang.String getWabaId();
```

- *Type:* java.lang.String

The WhatsApp Business Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#waba_id CesDeployment#waba_id}

---

##### `authCode`<sup>Optional</sup> <a name="authCode" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.authCode"></a>

```java
public java.lang.String getAuthCode();
```

- *Type:* java.lang.String

The Meta auth code provided by the embedded signup flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#auth_code CesDeployment#auth_code}

---

##### `authCodeWo`<sup>Optional</sup> <a name="authCodeWo" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.authCodeWo"></a>

```java
public java.lang.String getAuthCodeWo();
```

- *Type:* java.lang.String

The Meta auth code provided by the embedded signup flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#auth_code_wo CesDeployment#auth_code_wo}

---

##### `authCodeWoVersion`<sup>Optional</sup> <a name="authCodeWoVersion" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.authCodeWoVersion"></a>

```java
public java.lang.String getAuthCodeWoVersion();
```

- *Type:* java.lang.String

Triggers update of 'auth_code_wo' write-only.

Increment this value when an update to 'auth_code_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#auth_code_wo_version CesDeployment#auth_code_wo_version}

---

##### `conversationProfileId`<sup>Optional</sup> <a name="conversationProfileId" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.conversationProfileId"></a>

```java
public java.lang.String getConversationProfileId();
```

- *Type:* java.lang.String

The Conversation Profile ID to use for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#conversation_profile_id CesDeployment#conversation_profile_id}

---

##### `pin`<sup>Optional</sup> <a name="pin" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.pin"></a>

```java
public java.lang.String getPin();
```

- *Type:* java.lang.String

The 6-digit PIN created by the user for two-step verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#pin CesDeployment#pin}

---

##### `pinWo`<sup>Optional</sup> <a name="pinWo" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.pinWo"></a>

```java
public java.lang.String getPinWo();
```

- *Type:* java.lang.String

The 6-digit PIN created by the user for two-step verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#pin_wo CesDeployment#pin_wo}

---

##### `pinWoVersion`<sup>Optional</sup> <a name="pinWoVersion" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.pinWoVersion"></a>

```java
public java.lang.String getPinWoVersion();
```

- *Type:* java.lang.String

Triggers update of 'pin_wo' write-only.

Increment this value when an update to 'pin_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#pin_wo_version CesDeployment#pin_wo_version}

---

## Classes <a name="Classes" id="Classes"></a>

### CesDeploymentChannelProfileOutputReference <a name="CesDeploymentChannelProfileOutputReference" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_deployment.CesDeploymentChannelProfileOutputReference;

new CesDeploymentChannelProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.putPersonaProperty">putPersonaProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.putWebWidgetConfig">putWebWidgetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.putWhatsappConfig">putWhatsappConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetChannelType">resetChannelType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetDisableBargeInControl">resetDisableBargeInControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetDisableDtmf">resetDisableDtmf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetPersonaProperty">resetPersonaProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetProfileId">resetProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetWebWidgetConfig">resetWebWidgetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetWhatsappConfig">resetWhatsappConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPersonaProperty` <a name="putPersonaProperty" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.putPersonaProperty"></a>

```java
public void putPersonaProperty(CesDeploymentChannelProfilePersonaProperty value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.putPersonaProperty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaProperty">CesDeploymentChannelProfilePersonaProperty</a>

---

##### `putWebWidgetConfig` <a name="putWebWidgetConfig" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.putWebWidgetConfig"></a>

```java
public void putWebWidgetConfig(CesDeploymentChannelProfileWebWidgetConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.putWebWidgetConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig">CesDeploymentChannelProfileWebWidgetConfig</a>

---

##### `putWhatsappConfig` <a name="putWhatsappConfig" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.putWhatsappConfig"></a>

```java
public void putWhatsappConfig(CesDeploymentChannelProfileWhatsappConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.putWhatsappConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfig">CesDeploymentChannelProfileWhatsappConfig</a>

---

##### `resetChannelType` <a name="resetChannelType" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetChannelType"></a>

```java
public void resetChannelType()
```

##### `resetDisableBargeInControl` <a name="resetDisableBargeInControl" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetDisableBargeInControl"></a>

```java
public void resetDisableBargeInControl()
```

##### `resetDisableDtmf` <a name="resetDisableDtmf" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetDisableDtmf"></a>

```java
public void resetDisableDtmf()
```

##### `resetPersonaProperty` <a name="resetPersonaProperty" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetPersonaProperty"></a>

```java
public void resetPersonaProperty()
```

##### `resetProfileId` <a name="resetProfileId" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetProfileId"></a>

```java
public void resetProfileId()
```

##### `resetWebWidgetConfig` <a name="resetWebWidgetConfig" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetWebWidgetConfig"></a>

```java
public void resetWebWidgetConfig()
```

##### `resetWhatsappConfig` <a name="resetWhatsappConfig" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetWhatsappConfig"></a>

```java
public void resetWhatsappConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.personaProperty">personaProperty</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference">CesDeploymentChannelProfilePersonaPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.webWidgetConfig">webWidgetConfig</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference">CesDeploymentChannelProfileWebWidgetConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.whatsappConfig">whatsappConfig</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference">CesDeploymentChannelProfileWhatsappConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.channelTypeInput">channelTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.disableBargeInControlInput">disableBargeInControlInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.disableDtmfInput">disableDtmfInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.personaPropertyInput">personaPropertyInput</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaProperty">CesDeploymentChannelProfilePersonaProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.profileIdInput">profileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.webWidgetConfigInput">webWidgetConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig">CesDeploymentChannelProfileWebWidgetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.whatsappConfigInput">whatsappConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfig">CesDeploymentChannelProfileWhatsappConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.channelType">channelType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.disableBargeInControl">disableBargeInControl</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.disableDtmf">disableDtmf</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.profileId">profileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile">CesDeploymentChannelProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `personaProperty`<sup>Required</sup> <a name="personaProperty" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.personaProperty"></a>

```java
public CesDeploymentChannelProfilePersonaPropertyOutputReference getPersonaProperty();
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference">CesDeploymentChannelProfilePersonaPropertyOutputReference</a>

---

##### `webWidgetConfig`<sup>Required</sup> <a name="webWidgetConfig" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.webWidgetConfig"></a>

```java
public CesDeploymentChannelProfileWebWidgetConfigOutputReference getWebWidgetConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference">CesDeploymentChannelProfileWebWidgetConfigOutputReference</a>

---

##### `whatsappConfig`<sup>Required</sup> <a name="whatsappConfig" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.whatsappConfig"></a>

```java
public CesDeploymentChannelProfileWhatsappConfigOutputReference getWhatsappConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference">CesDeploymentChannelProfileWhatsappConfigOutputReference</a>

---

##### `channelTypeInput`<sup>Optional</sup> <a name="channelTypeInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.channelTypeInput"></a>

```java
public java.lang.String getChannelTypeInput();
```

- *Type:* java.lang.String

---

##### `disableBargeInControlInput`<sup>Optional</sup> <a name="disableBargeInControlInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.disableBargeInControlInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableBargeInControlInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableDtmfInput`<sup>Optional</sup> <a name="disableDtmfInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.disableDtmfInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableDtmfInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `personaPropertyInput`<sup>Optional</sup> <a name="personaPropertyInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.personaPropertyInput"></a>

```java
public CesDeploymentChannelProfilePersonaProperty getPersonaPropertyInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaProperty">CesDeploymentChannelProfilePersonaProperty</a>

---

##### `profileIdInput`<sup>Optional</sup> <a name="profileIdInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.profileIdInput"></a>

```java
public java.lang.String getProfileIdInput();
```

- *Type:* java.lang.String

---

##### `webWidgetConfigInput`<sup>Optional</sup> <a name="webWidgetConfigInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.webWidgetConfigInput"></a>

```java
public CesDeploymentChannelProfileWebWidgetConfig getWebWidgetConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig">CesDeploymentChannelProfileWebWidgetConfig</a>

---

##### `whatsappConfigInput`<sup>Optional</sup> <a name="whatsappConfigInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.whatsappConfigInput"></a>

```java
public CesDeploymentChannelProfileWhatsappConfig getWhatsappConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfig">CesDeploymentChannelProfileWhatsappConfig</a>

---

##### `channelType`<sup>Required</sup> <a name="channelType" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.channelType"></a>

```java
public java.lang.String getChannelType();
```

- *Type:* java.lang.String

---

##### `disableBargeInControl`<sup>Required</sup> <a name="disableBargeInControl" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.disableBargeInControl"></a>

```java
public java.lang.Boolean|IResolvable getDisableBargeInControl();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableDtmf`<sup>Required</sup> <a name="disableDtmf" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.disableDtmf"></a>

```java
public java.lang.Boolean|IResolvable getDisableDtmf();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.internalValue"></a>

```java
public CesDeploymentChannelProfile getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile">CesDeploymentChannelProfile</a>

---


### CesDeploymentChannelProfilePersonaPropertyOutputReference <a name="CesDeploymentChannelProfilePersonaPropertyOutputReference" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_deployment.CesDeploymentChannelProfilePersonaPropertyOutputReference;

new CesDeploymentChannelProfilePersonaPropertyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.resetPersona">resetPersona</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPersona` <a name="resetPersona" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.resetPersona"></a>

```java
public void resetPersona()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.property.personaInput">personaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.property.persona">persona</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaProperty">CesDeploymentChannelProfilePersonaProperty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `personaInput`<sup>Optional</sup> <a name="personaInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.property.personaInput"></a>

```java
public java.lang.String getPersonaInput();
```

- *Type:* java.lang.String

---

##### `persona`<sup>Required</sup> <a name="persona" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.property.persona"></a>

```java
public java.lang.String getPersona();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.property.internalValue"></a>

```java
public CesDeploymentChannelProfilePersonaProperty getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaProperty">CesDeploymentChannelProfilePersonaProperty</a>

---


### CesDeploymentChannelProfileWebWidgetConfigOutputReference <a name="CesDeploymentChannelProfileWebWidgetConfigOutputReference" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_deployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference;

new CesDeploymentChannelProfileWebWidgetConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.putSecuritySettings">putSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.resetModality">resetModality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.resetSecuritySettings">resetSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.resetTheme">resetTheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.resetWebWidgetTitle">resetWebWidgetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecuritySettings` <a name="putSecuritySettings" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.putSecuritySettings"></a>

```java
public void putSecuritySettings(CesDeploymentChannelProfileWebWidgetConfigSecuritySettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.putSecuritySettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings">CesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a>

---

##### `resetModality` <a name="resetModality" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.resetModality"></a>

```java
public void resetModality()
```

##### `resetSecuritySettings` <a name="resetSecuritySettings" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.resetSecuritySettings"></a>

```java
public void resetSecuritySettings()
```

##### `resetTheme` <a name="resetTheme" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.resetTheme"></a>

```java
public void resetTheme()
```

##### `resetWebWidgetTitle` <a name="resetWebWidgetTitle" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.resetWebWidgetTitle"></a>

```java
public void resetWebWidgetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.securitySettings">securitySettings</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference">CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.modalityInput">modalityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.securitySettingsInput">securitySettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings">CesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.themeInput">themeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitleInput">webWidgetTitleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.modality">modality</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.theme">theme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitle">webWidgetTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig">CesDeploymentChannelProfileWebWidgetConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securitySettings`<sup>Required</sup> <a name="securitySettings" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.securitySettings"></a>

```java
public CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference getSecuritySettings();
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference">CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference</a>

---

##### `modalityInput`<sup>Optional</sup> <a name="modalityInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.modalityInput"></a>

```java
public java.lang.String getModalityInput();
```

- *Type:* java.lang.String

---

##### `securitySettingsInput`<sup>Optional</sup> <a name="securitySettingsInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.securitySettingsInput"></a>

```java
public CesDeploymentChannelProfileWebWidgetConfigSecuritySettings getSecuritySettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings">CesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a>

---

##### `themeInput`<sup>Optional</sup> <a name="themeInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.themeInput"></a>

```java
public java.lang.String getThemeInput();
```

- *Type:* java.lang.String

---

##### `webWidgetTitleInput`<sup>Optional</sup> <a name="webWidgetTitleInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitleInput"></a>

```java
public java.lang.String getWebWidgetTitleInput();
```

- *Type:* java.lang.String

---

##### `modality`<sup>Required</sup> <a name="modality" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.modality"></a>

```java
public java.lang.String getModality();
```

- *Type:* java.lang.String

---

##### `theme`<sup>Required</sup> <a name="theme" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.theme"></a>

```java
public java.lang.String getTheme();
```

- *Type:* java.lang.String

---

##### `webWidgetTitle`<sup>Required</sup> <a name="webWidgetTitle" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitle"></a>

```java
public java.lang.String getWebWidgetTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.internalValue"></a>

```java
public CesDeploymentChannelProfileWebWidgetConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig">CesDeploymentChannelProfileWebWidgetConfig</a>

---


### CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference <a name="CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_deployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference;

new CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetAllowedOrigins">resetAllowedOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnableOriginCheck">resetEnableOriginCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnablePublicAccess">resetEnablePublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnableRecaptcha">resetEnableRecaptcha</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedOrigins` <a name="resetAllowedOrigins" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetAllowedOrigins"></a>

```java
public void resetAllowedOrigins()
```

##### `resetEnableOriginCheck` <a name="resetEnableOriginCheck" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnableOriginCheck"></a>

```java
public void resetEnableOriginCheck()
```

##### `resetEnablePublicAccess` <a name="resetEnablePublicAccess" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnablePublicAccess"></a>

```java
public void resetEnablePublicAccess()
```

##### `resetEnableRecaptcha` <a name="resetEnableRecaptcha" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnableRecaptcha"></a>

```java
public void resetEnableRecaptcha()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableOriginCheckInput">enableOriginCheckInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enablePublicAccessInput">enablePublicAccessInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableRecaptchaInput">enableRecaptchaInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableOriginCheck">enableOriginCheck</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enablePublicAccess">enablePublicAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableRecaptcha">enableRecaptcha</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings">CesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.allowedOriginsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedOriginsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableOriginCheckInput`<sup>Optional</sup> <a name="enableOriginCheckInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableOriginCheckInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableOriginCheckInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enablePublicAccessInput`<sup>Optional</sup> <a name="enablePublicAccessInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enablePublicAccessInput"></a>

```java
public java.lang.Boolean|IResolvable getEnablePublicAccessInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableRecaptchaInput`<sup>Optional</sup> <a name="enableRecaptchaInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableRecaptchaInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableRecaptchaInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableOriginCheck`<sup>Required</sup> <a name="enableOriginCheck" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableOriginCheck"></a>

```java
public java.lang.Boolean|IResolvable getEnableOriginCheck();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enablePublicAccess`<sup>Required</sup> <a name="enablePublicAccess" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enablePublicAccess"></a>

```java
public java.lang.Boolean|IResolvable getEnablePublicAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableRecaptcha`<sup>Required</sup> <a name="enableRecaptcha" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableRecaptcha"></a>

```java
public java.lang.Boolean|IResolvable getEnableRecaptcha();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.internalValue"></a>

```java
public CesDeploymentChannelProfileWebWidgetConfigSecuritySettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings">CesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a>

---


### CesDeploymentChannelProfileWhatsappConfigOutputReference <a name="CesDeploymentChannelProfileWhatsappConfigOutputReference" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_deployment.CesDeploymentChannelProfileWhatsappConfigOutputReference;

new CesDeploymentChannelProfileWhatsappConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.resetPhoneNumber"></a>

```java
public void resetPhoneNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.thumbnailUrl">thumbnailUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.phoneNumberIdInput">phoneNumberIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.wabaIdInput">wabaIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.phoneNumberId">phoneNumberId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.wabaId">wabaId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfig">CesDeploymentChannelProfileWhatsappConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `thumbnailUrl`<sup>Required</sup> <a name="thumbnailUrl" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.thumbnailUrl"></a>

```java
public java.lang.String getThumbnailUrl();
```

- *Type:* java.lang.String

---

##### `phoneNumberIdInput`<sup>Optional</sup> <a name="phoneNumberIdInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.phoneNumberIdInput"></a>

```java
public java.lang.String getPhoneNumberIdInput();
```

- *Type:* java.lang.String

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.phoneNumberInput"></a>

```java
public java.lang.String getPhoneNumberInput();
```

- *Type:* java.lang.String

---

##### `wabaIdInput`<sup>Optional</sup> <a name="wabaIdInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.wabaIdInput"></a>

```java
public java.lang.String getWabaIdInput();
```

- *Type:* java.lang.String

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

---

##### `phoneNumberId`<sup>Required</sup> <a name="phoneNumberId" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.phoneNumberId"></a>

```java
public java.lang.String getPhoneNumberId();
```

- *Type:* java.lang.String

---

##### `wabaId`<sup>Required</sup> <a name="wabaId" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.wabaId"></a>

```java
public java.lang.String getWabaId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.internalValue"></a>

```java
public CesDeploymentChannelProfileWhatsappConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfig">CesDeploymentChannelProfileWhatsappConfig</a>

---


### CesDeploymentInstagramCredentialsOutputReference <a name="CesDeploymentInstagramCredentialsOutputReference" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_deployment.CesDeploymentInstagramCredentialsOutputReference;

new CesDeploymentInstagramCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.resetAuthCode">resetAuthCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.resetAuthCodeWo">resetAuthCodeWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.resetAuthCodeWoVersion">resetAuthCodeWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.resetConversationProfileId">resetConversationProfileId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthCode` <a name="resetAuthCode" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.resetAuthCode"></a>

```java
public void resetAuthCode()
```

##### `resetAuthCodeWo` <a name="resetAuthCodeWo" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.resetAuthCodeWo"></a>

```java
public void resetAuthCodeWo()
```

##### `resetAuthCodeWoVersion` <a name="resetAuthCodeWoVersion" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.resetAuthCodeWoVersion"></a>

```java
public void resetAuthCodeWoVersion()
```

##### `resetConversationProfileId` <a name="resetConversationProfileId" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.resetConversationProfileId"></a>

```java
public void resetConversationProfileId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.authCodeInput">authCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.authCodeWoInput">authCodeWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.authCodeWoVersionInput">authCodeWoVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.conversationProfileIdInput">conversationProfileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.authCode">authCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.authCodeWo">authCodeWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.authCodeWoVersion">authCodeWoVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.conversationProfileId">conversationProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials">CesDeploymentInstagramCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authCodeInput`<sup>Optional</sup> <a name="authCodeInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.authCodeInput"></a>

```java
public java.lang.String getAuthCodeInput();
```

- *Type:* java.lang.String

---

##### `authCodeWoInput`<sup>Optional</sup> <a name="authCodeWoInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.authCodeWoInput"></a>

```java
public java.lang.String getAuthCodeWoInput();
```

- *Type:* java.lang.String

---

##### `authCodeWoVersionInput`<sup>Optional</sup> <a name="authCodeWoVersionInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.authCodeWoVersionInput"></a>

```java
public java.lang.String getAuthCodeWoVersionInput();
```

- *Type:* java.lang.String

---

##### `conversationProfileIdInput`<sup>Optional</sup> <a name="conversationProfileIdInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.conversationProfileIdInput"></a>

```java
public java.lang.String getConversationProfileIdInput();
```

- *Type:* java.lang.String

---

##### `authCode`<sup>Required</sup> <a name="authCode" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.authCode"></a>

```java
public java.lang.String getAuthCode();
```

- *Type:* java.lang.String

---

##### ~~`authCodeWo`~~<sup>Required</sup> <a name="authCodeWo" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.authCodeWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```java
public java.lang.String getAuthCodeWo();
```

- *Type:* java.lang.String

---

##### `authCodeWoVersion`<sup>Required</sup> <a name="authCodeWoVersion" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.authCodeWoVersion"></a>

```java
public java.lang.String getAuthCodeWoVersion();
```

- *Type:* java.lang.String

---

##### `conversationProfileId`<sup>Required</sup> <a name="conversationProfileId" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.conversationProfileId"></a>

```java
public java.lang.String getConversationProfileId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.internalValue"></a>

```java
public CesDeploymentInstagramCredentials getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials">CesDeploymentInstagramCredentials</a>

---


### CesDeploymentTimeoutsOutputReference <a name="CesDeploymentTimeoutsOutputReference" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_deployment.CesDeploymentTimeoutsOutputReference;

new CesDeploymentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts">CesDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|CesDeploymentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts">CesDeploymentTimeouts</a>

---


### CesDeploymentWhatsappCredentialsOutputReference <a name="CesDeploymentWhatsappCredentialsOutputReference" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_deployment.CesDeploymentWhatsappCredentialsOutputReference;

new CesDeploymentWhatsappCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.resetAuthCode">resetAuthCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.resetAuthCodeWo">resetAuthCodeWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.resetAuthCodeWoVersion">resetAuthCodeWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.resetConversationProfileId">resetConversationProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.resetPin">resetPin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.resetPinWo">resetPinWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.resetPinWoVersion">resetPinWoVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthCode` <a name="resetAuthCode" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.resetAuthCode"></a>

```java
public void resetAuthCode()
```

##### `resetAuthCodeWo` <a name="resetAuthCodeWo" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.resetAuthCodeWo"></a>

```java
public void resetAuthCodeWo()
```

##### `resetAuthCodeWoVersion` <a name="resetAuthCodeWoVersion" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.resetAuthCodeWoVersion"></a>

```java
public void resetAuthCodeWoVersion()
```

##### `resetConversationProfileId` <a name="resetConversationProfileId" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.resetConversationProfileId"></a>

```java
public void resetConversationProfileId()
```

##### `resetPin` <a name="resetPin" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.resetPin"></a>

```java
public void resetPin()
```

##### `resetPinWo` <a name="resetPinWo" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.resetPinWo"></a>

```java
public void resetPinWo()
```

##### `resetPinWoVersion` <a name="resetPinWoVersion" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.resetPinWoVersion"></a>

```java
public void resetPinWoVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.authCodeInput">authCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.authCodeWoInput">authCodeWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.authCodeWoVersionInput">authCodeWoVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.businessAccountIdInput">businessAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.conversationProfileIdInput">conversationProfileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.pinInput">pinInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.pinWoInput">pinWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.pinWoVersionInput">pinWoVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.wabaIdInput">wabaIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.authCode">authCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.authCodeWo">authCodeWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.authCodeWoVersion">authCodeWoVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.businessAccountId">businessAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.conversationProfileId">conversationProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.pin">pin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.pinWo">pinWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.pinWoVersion">pinWoVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.wabaId">wabaId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials">CesDeploymentWhatsappCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authCodeInput`<sup>Optional</sup> <a name="authCodeInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.authCodeInput"></a>

```java
public java.lang.String getAuthCodeInput();
```

- *Type:* java.lang.String

---

##### `authCodeWoInput`<sup>Optional</sup> <a name="authCodeWoInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.authCodeWoInput"></a>

```java
public java.lang.String getAuthCodeWoInput();
```

- *Type:* java.lang.String

---

##### `authCodeWoVersionInput`<sup>Optional</sup> <a name="authCodeWoVersionInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.authCodeWoVersionInput"></a>

```java
public java.lang.String getAuthCodeWoVersionInput();
```

- *Type:* java.lang.String

---

##### `businessAccountIdInput`<sup>Optional</sup> <a name="businessAccountIdInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.businessAccountIdInput"></a>

```java
public java.lang.String getBusinessAccountIdInput();
```

- *Type:* java.lang.String

---

##### `conversationProfileIdInput`<sup>Optional</sup> <a name="conversationProfileIdInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.conversationProfileIdInput"></a>

```java
public java.lang.String getConversationProfileIdInput();
```

- *Type:* java.lang.String

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.phoneNumberInput"></a>

```java
public java.lang.String getPhoneNumberInput();
```

- *Type:* java.lang.String

---

##### `pinInput`<sup>Optional</sup> <a name="pinInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.pinInput"></a>

```java
public java.lang.String getPinInput();
```

- *Type:* java.lang.String

---

##### `pinWoInput`<sup>Optional</sup> <a name="pinWoInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.pinWoInput"></a>

```java
public java.lang.String getPinWoInput();
```

- *Type:* java.lang.String

---

##### `pinWoVersionInput`<sup>Optional</sup> <a name="pinWoVersionInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.pinWoVersionInput"></a>

```java
public java.lang.String getPinWoVersionInput();
```

- *Type:* java.lang.String

---

##### `wabaIdInput`<sup>Optional</sup> <a name="wabaIdInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.wabaIdInput"></a>

```java
public java.lang.String getWabaIdInput();
```

- *Type:* java.lang.String

---

##### `authCode`<sup>Required</sup> <a name="authCode" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.authCode"></a>

```java
public java.lang.String getAuthCode();
```

- *Type:* java.lang.String

---

##### ~~`authCodeWo`~~<sup>Required</sup> <a name="authCodeWo" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.authCodeWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```java
public java.lang.String getAuthCodeWo();
```

- *Type:* java.lang.String

---

##### `authCodeWoVersion`<sup>Required</sup> <a name="authCodeWoVersion" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.authCodeWoVersion"></a>

```java
public java.lang.String getAuthCodeWoVersion();
```

- *Type:* java.lang.String

---

##### `businessAccountId`<sup>Required</sup> <a name="businessAccountId" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.businessAccountId"></a>

```java
public java.lang.String getBusinessAccountId();
```

- *Type:* java.lang.String

---

##### `conversationProfileId`<sup>Required</sup> <a name="conversationProfileId" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.conversationProfileId"></a>

```java
public java.lang.String getConversationProfileId();
```

- *Type:* java.lang.String

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

---

##### `pin`<sup>Required</sup> <a name="pin" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.pin"></a>

```java
public java.lang.String getPin();
```

- *Type:* java.lang.String

---

##### ~~`pinWo`~~<sup>Required</sup> <a name="pinWo" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.pinWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```java
public java.lang.String getPinWo();
```

- *Type:* java.lang.String

---

##### `pinWoVersion`<sup>Required</sup> <a name="pinWoVersion" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.pinWoVersion"></a>

```java
public java.lang.String getPinWoVersion();
```

- *Type:* java.lang.String

---

##### `wabaId`<sup>Required</sup> <a name="wabaId" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.wabaId"></a>

```java
public java.lang.String getWabaId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.internalValue"></a>

```java
public CesDeploymentWhatsappCredentials getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials">CesDeploymentWhatsappCredentials</a>

---



