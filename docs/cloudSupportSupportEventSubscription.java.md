# `cloudSupportSupportEventSubscription` Submodule <a name="`cloudSupportSupportEventSubscription` Submodule" id="@cdktn/provider-google.cloudSupportSupportEventSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudSupportSupportEventSubscription <a name="CloudSupportSupportEventSubscription" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/cloud_support_support_event_subscription google_cloud_support_support_event_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_support_support_event_subscription.CloudSupportSupportEventSubscription;

CloudSupportSupportEventSubscription.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .organization(java.lang.String)
    .pubSubTopic(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(CloudSupportSupportEventSubscriptionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | The organization ID for the support event subscription. |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.Initializer.parameter.pubSubTopic">pubSubTopic</a></code> | <code>java.lang.String</code> | The name of the Pub/Sub topic to publish notifications to. Format: projects/{project}/topics/{topic}. |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/cloud_support_support_event_subscription#id CloudSupportSupportEventSubscription#id}. |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeouts">CloudSupportSupportEventSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

The organization ID for the support event subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/cloud_support_support_event_subscription#organization CloudSupportSupportEventSubscription#organization}

---

##### `pubSubTopic`<sup>Required</sup> <a name="pubSubTopic" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.Initializer.parameter.pubSubTopic"></a>

- *Type:* java.lang.String

The name of the Pub/Sub topic to publish notifications to. Format: projects/{project}/topics/{topic}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/cloud_support_support_event_subscription#pub_sub_topic CloudSupportSupportEventSubscription#pub_sub_topic}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/cloud_support_support_event_subscription#deletion_policy CloudSupportSupportEventSubscription#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/cloud_support_support_event_subscription#id CloudSupportSupportEventSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeouts">CloudSupportSupportEventSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/cloud_support_support_event_subscription#timeouts CloudSupportSupportEventSubscription#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.putTimeouts"></a>

```java
public void putTimeouts(CloudSupportSupportEventSubscriptionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeouts">CloudSupportSupportEventSubscriptionTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudSupportSupportEventSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.isConstruct"></a>

```java
import io.cdktn.providers.google.cloud_support_support_event_subscription.CloudSupportSupportEventSubscription;

CloudSupportSupportEventSubscription.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.isTerraformElement"></a>

```java
import io.cdktn.providers.google.cloud_support_support_event_subscription.CloudSupportSupportEventSubscription;

CloudSupportSupportEventSubscription.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.isTerraformResource"></a>

```java
import io.cdktn.providers.google.cloud_support_support_event_subscription.CloudSupportSupportEventSubscription;

CloudSupportSupportEventSubscription.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.cloud_support_support_event_subscription.CloudSupportSupportEventSubscription;

CloudSupportSupportEventSubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudSupportSupportEventSubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudSupportSupportEventSubscription resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudSupportSupportEventSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudSupportSupportEventSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/cloud_support_support_event_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudSupportSupportEventSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.deleteTime">deleteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.failureReason">failureReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.purgeTime">purgeTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference">CloudSupportSupportEventSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.pubSubTopicInput">pubSubTopicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeouts">CloudSupportSupportEventSubscriptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.pubSubTopic">pubSubTopic</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.deleteTime"></a>

```java
public java.lang.String getDeleteTime();
```

- *Type:* java.lang.String

---

##### `failureReason`<sup>Required</sup> <a name="failureReason" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.failureReason"></a>

```java
public java.lang.String getFailureReason();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `purgeTime`<sup>Required</sup> <a name="purgeTime" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.purgeTime"></a>

```java
public java.lang.String getPurgeTime();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.timeouts"></a>

```java
public CloudSupportSupportEventSubscriptionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference">CloudSupportSupportEventSubscriptionTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `pubSubTopicInput`<sup>Optional</sup> <a name="pubSubTopicInput" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.pubSubTopicInput"></a>

```java
public java.lang.String getPubSubTopicInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.timeoutsInput"></a>

```java
public IResolvable|CloudSupportSupportEventSubscriptionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeouts">CloudSupportSupportEventSubscriptionTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `pubSubTopic`<sup>Required</sup> <a name="pubSubTopic" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.pubSubTopic"></a>

```java
public java.lang.String getPubSubTopic();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscription.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudSupportSupportEventSubscriptionConfig <a name="CloudSupportSupportEventSubscriptionConfig" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionConfig.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_support_support_event_subscription.CloudSupportSupportEventSubscriptionConfig;

CloudSupportSupportEventSubscriptionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .organization(java.lang.String)
    .pubSubTopic(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(CloudSupportSupportEventSubscriptionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | The organization ID for the support event subscription. |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionConfig.property.pubSubTopic">pubSubTopic</a></code> | <code>java.lang.String</code> | The name of the Pub/Sub topic to publish notifications to. Format: projects/{project}/topics/{topic}. |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/cloud_support_support_event_subscription#id CloudSupportSupportEventSubscription#id}. |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeouts">CloudSupportSupportEventSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

The organization ID for the support event subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/cloud_support_support_event_subscription#organization CloudSupportSupportEventSubscription#organization}

---

##### `pubSubTopic`<sup>Required</sup> <a name="pubSubTopic" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionConfig.property.pubSubTopic"></a>

```java
public java.lang.String getPubSubTopic();
```

- *Type:* java.lang.String

The name of the Pub/Sub topic to publish notifications to. Format: projects/{project}/topics/{topic}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/cloud_support_support_event_subscription#pub_sub_topic CloudSupportSupportEventSubscription#pub_sub_topic}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/cloud_support_support_event_subscription#deletion_policy CloudSupportSupportEventSubscription#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/cloud_support_support_event_subscription#id CloudSupportSupportEventSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionConfig.property.timeouts"></a>

```java
public CloudSupportSupportEventSubscriptionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeouts">CloudSupportSupportEventSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/cloud_support_support_event_subscription#timeouts CloudSupportSupportEventSubscription#timeouts}

---

### CloudSupportSupportEventSubscriptionTimeouts <a name="CloudSupportSupportEventSubscriptionTimeouts" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_support_support_event_subscription.CloudSupportSupportEventSubscriptionTimeouts;

CloudSupportSupportEventSubscriptionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/cloud_support_support_event_subscription#create CloudSupportSupportEventSubscription#create}. |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/cloud_support_support_event_subscription#delete CloudSupportSupportEventSubscription#delete}. |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/cloud_support_support_event_subscription#update CloudSupportSupportEventSubscription#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/cloud_support_support_event_subscription#create CloudSupportSupportEventSubscription#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/cloud_support_support_event_subscription#delete CloudSupportSupportEventSubscription#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/cloud_support_support_event_subscription#update CloudSupportSupportEventSubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudSupportSupportEventSubscriptionTimeoutsOutputReference <a name="CloudSupportSupportEventSubscriptionTimeoutsOutputReference" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.cloud_support_support_event_subscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference;

new CloudSupportSupportEventSubscriptionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeouts">CloudSupportSupportEventSubscriptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudSupportSupportEventSubscriptionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cloudSupportSupportEventSubscription.CloudSupportSupportEventSubscriptionTimeouts">CloudSupportSupportEventSubscriptionTimeouts</a>

---



