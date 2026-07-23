# `dataGooglePubsubSubscription` Submodule <a name="`dataGooglePubsubSubscription` Submodule" id="@cdktn/provider-google.dataGooglePubsubSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGooglePubsubSubscription <a name="DataGooglePubsubSubscription" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/pubsub_subscription google_pubsub_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscription(Construct Scope, string Id, DataGooglePubsubSubscriptionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig">DataGooglePubsubSubscriptionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig">DataGooglePubsubSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGooglePubsubSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGooglePubsubSubscription.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGooglePubsubSubscription.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGooglePubsubSubscription.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGooglePubsubSubscription.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGooglePubsubSubscription resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGooglePubsubSubscription to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGooglePubsubSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/pubsub_subscription#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGooglePubsubSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.ackDeadlineSeconds">AckDeadlineSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.bigqueryConfig">BigqueryConfig</a></code> | <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList">DataGooglePubsubSubscriptionBigqueryConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.cloudStorageConfig">CloudStorageConfig</a></code> | <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigList">DataGooglePubsubSubscriptionCloudStorageConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.deadLetterPolicy">DeadLetterPolicy</a></code> | <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList">DataGooglePubsubSubscriptionDeadLetterPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.enableExactlyOnceDelivery">EnableExactlyOnceDelivery</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.enableMessageOrdering">EnableMessageOrdering</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.expirationPolicy">ExpirationPolicy</a></code> | <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList">DataGooglePubsubSubscriptionExpirationPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.labels">Labels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.messageRetentionDuration">MessageRetentionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.messageTransforms">MessageTransforms</a></code> | <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsList">DataGooglePubsubSubscriptionMessageTransformsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.pushConfig">PushConfig</a></code> | <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList">DataGooglePubsubSubscriptionPushConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.retainAckedMessages">RetainAckedMessages</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList">DataGooglePubsubSubscriptionRetryPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.topic">Topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AckDeadlineSeconds`<sup>Required</sup> <a name="AckDeadlineSeconds" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.ackDeadlineSeconds"></a>

```csharp
public double AckDeadlineSeconds { get; }
```

- *Type:* double

---

##### `BigqueryConfig`<sup>Required</sup> <a name="BigqueryConfig" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.bigqueryConfig"></a>

```csharp
public DataGooglePubsubSubscriptionBigqueryConfigList BigqueryConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList">DataGooglePubsubSubscriptionBigqueryConfigList</a>

---

##### `CloudStorageConfig`<sup>Required</sup> <a name="CloudStorageConfig" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.cloudStorageConfig"></a>

```csharp
public DataGooglePubsubSubscriptionCloudStorageConfigList CloudStorageConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigList">DataGooglePubsubSubscriptionCloudStorageConfigList</a>

---

##### `DeadLetterPolicy`<sup>Required</sup> <a name="DeadLetterPolicy" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.deadLetterPolicy"></a>

```csharp
public DataGooglePubsubSubscriptionDeadLetterPolicyList DeadLetterPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList">DataGooglePubsubSubscriptionDeadLetterPolicyList</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EnableExactlyOnceDelivery`<sup>Required</sup> <a name="EnableExactlyOnceDelivery" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.enableExactlyOnceDelivery"></a>

```csharp
public IResolvable EnableExactlyOnceDelivery { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `EnableMessageOrdering`<sup>Required</sup> <a name="EnableMessageOrdering" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.enableMessageOrdering"></a>

```csharp
public IResolvable EnableMessageOrdering { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ExpirationPolicy`<sup>Required</sup> <a name="ExpirationPolicy" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.expirationPolicy"></a>

```csharp
public DataGooglePubsubSubscriptionExpirationPolicyList ExpirationPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList">DataGooglePubsubSubscriptionExpirationPolicyList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `MessageRetentionDuration`<sup>Required</sup> <a name="MessageRetentionDuration" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.messageRetentionDuration"></a>

```csharp
public string MessageRetentionDuration { get; }
```

- *Type:* string

---

##### `MessageTransforms`<sup>Required</sup> <a name="MessageTransforms" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.messageTransforms"></a>

```csharp
public DataGooglePubsubSubscriptionMessageTransformsList MessageTransforms { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsList">DataGooglePubsubSubscriptionMessageTransformsList</a>

---

##### `PushConfig`<sup>Required</sup> <a name="PushConfig" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.pushConfig"></a>

```csharp
public DataGooglePubsubSubscriptionPushConfigList PushConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList">DataGooglePubsubSubscriptionPushConfigList</a>

---

##### `RetainAckedMessages`<sup>Required</sup> <a name="RetainAckedMessages" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.retainAckedMessages"></a>

```csharp
public IResolvable RetainAckedMessages { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RetryPolicy`<sup>Required</sup> <a name="RetryPolicy" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.retryPolicy"></a>

```csharp
public DataGooglePubsubSubscriptionRetryPolicyList RetryPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList">DataGooglePubsubSubscriptionRetryPolicyList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGooglePubsubSubscriptionBigqueryConfig <a name="DataGooglePubsubSubscriptionBigqueryConfig" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionBigqueryConfig {

};
```


### DataGooglePubsubSubscriptionCloudStorageConfig <a name="DataGooglePubsubSubscriptionCloudStorageConfig" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionCloudStorageConfig {

};
```


### DataGooglePubsubSubscriptionCloudStorageConfigAvroConfig <a name="DataGooglePubsubSubscriptionCloudStorageConfigAvroConfig" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionCloudStorageConfigAvroConfig {

};
```


### DataGooglePubsubSubscriptionCloudStorageConfigTextConfig <a name="DataGooglePubsubSubscriptionCloudStorageConfigTextConfig" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionCloudStorageConfigTextConfig {

};
```


### DataGooglePubsubSubscriptionConfig <a name="DataGooglePubsubSubscriptionConfig" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.name">Name</a></code> | <code>string</code> | Name of the subscription. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/pubsub_subscription#id DataGooglePubsubSubscription#id}. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/pubsub_subscription#project DataGooglePubsubSubscription#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/pubsub_subscription#name DataGooglePubsubSubscription#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/pubsub_subscription#id DataGooglePubsubSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/pubsub_subscription#project DataGooglePubsubSubscription#project}.

---

### DataGooglePubsubSubscriptionDeadLetterPolicy <a name="DataGooglePubsubSubscriptionDeadLetterPolicy" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionDeadLetterPolicy {

};
```


### DataGooglePubsubSubscriptionExpirationPolicy <a name="DataGooglePubsubSubscriptionExpirationPolicy" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionExpirationPolicy {

};
```


### DataGooglePubsubSubscriptionMessageTransforms <a name="DataGooglePubsubSubscriptionMessageTransforms" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransforms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransforms.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionMessageTransforms {

};
```


### DataGooglePubsubSubscriptionMessageTransformsAiInference <a name="DataGooglePubsubSubscriptionMessageTransformsAiInference" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionMessageTransformsAiInference {

};
```


### DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference <a name="DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference {

};
```


### DataGooglePubsubSubscriptionMessageTransformsJavascriptUdf <a name="DataGooglePubsubSubscriptionMessageTransformsJavascriptUdf" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdf"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdf.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionMessageTransformsJavascriptUdf {

};
```


### DataGooglePubsubSubscriptionPushConfig <a name="DataGooglePubsubSubscriptionPushConfig" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionPushConfig {

};
```


### DataGooglePubsubSubscriptionPushConfigNoWrapper <a name="DataGooglePubsubSubscriptionPushConfigNoWrapper" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapper"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapper.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionPushConfigNoWrapper {

};
```


### DataGooglePubsubSubscriptionPushConfigOidcToken <a name="DataGooglePubsubSubscriptionPushConfigOidcToken" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcToken.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionPushConfigOidcToken {

};
```


### DataGooglePubsubSubscriptionRetryPolicy <a name="DataGooglePubsubSubscriptionRetryPolicy" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionRetryPolicy {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGooglePubsubSubscriptionBigqueryConfigList <a name="DataGooglePubsubSubscriptionBigqueryConfigList" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionBigqueryConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.get"></a>

```csharp
private DataGooglePubsubSubscriptionBigqueryConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGooglePubsubSubscriptionBigqueryConfigOutputReference <a name="DataGooglePubsubSubscriptionBigqueryConfigOutputReference" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionBigqueryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFields">DropUnknownFields</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.table">Table</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchema">UseTableSchema</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchema">UseTopicSchema</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadata">WriteMetadata</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfig">DataGooglePubsubSubscriptionBigqueryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DropUnknownFields`<sup>Required</sup> <a name="DropUnknownFields" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFields"></a>

```csharp
public IResolvable DropUnknownFields { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; }
```

- *Type:* string

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.table"></a>

```csharp
public string Table { get; }
```

- *Type:* string

---

##### `UseTableSchema`<sup>Required</sup> <a name="UseTableSchema" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchema"></a>

```csharp
public IResolvable UseTableSchema { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `UseTopicSchema`<sup>Required</sup> <a name="UseTopicSchema" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchema"></a>

```csharp
public IResolvable UseTopicSchema { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `WriteMetadata`<sup>Required</sup> <a name="WriteMetadata" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadata"></a>

```csharp
public IResolvable WriteMetadata { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.internalValue"></a>

```csharp
public DataGooglePubsubSubscriptionBigqueryConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfig">DataGooglePubsubSubscriptionBigqueryConfig</a>

---


### DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigList <a name="DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigList" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigList.get"></a>

```csharp
private DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference <a name="DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.useTopicSchema">UseTopicSchema</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadata">WriteMetadata</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfig">DataGooglePubsubSubscriptionCloudStorageConfigAvroConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UseTopicSchema`<sup>Required</sup> <a name="UseTopicSchema" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.useTopicSchema"></a>

```csharp
public IResolvable UseTopicSchema { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `WriteMetadata`<sup>Required</sup> <a name="WriteMetadata" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadata"></a>

```csharp
public IResolvable WriteMetadata { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.internalValue"></a>

```csharp
public DataGooglePubsubSubscriptionCloudStorageConfigAvroConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfig">DataGooglePubsubSubscriptionCloudStorageConfigAvroConfig</a>

---


### DataGooglePubsubSubscriptionCloudStorageConfigList <a name="DataGooglePubsubSubscriptionCloudStorageConfigList" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionCloudStorageConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigList.get"></a>

```csharp
private DataGooglePubsubSubscriptionCloudStorageConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGooglePubsubSubscriptionCloudStorageConfigOutputReference <a name="DataGooglePubsubSubscriptionCloudStorageConfigOutputReference" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionCloudStorageConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfig">AvroConfig</a></code> | <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigList">DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormat">FilenameDatetimeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefix">FilenamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffix">FilenameSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytes">MaxBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxDuration">MaxDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxMessages">MaxMessages</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.property.textConfig">TextConfig</a></code> | <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigList">DataGooglePubsubSubscriptionCloudStorageConfigTextConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfig">DataGooglePubsubSubscriptionCloudStorageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvroConfig`<sup>Required</sup> <a name="AvroConfig" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfig"></a>

```csharp
public DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigList AvroConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigList">DataGooglePubsubSubscriptionCloudStorageConfigAvroConfigList</a>

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `FilenameDatetimeFormat`<sup>Required</sup> <a name="FilenameDatetimeFormat" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormat"></a>

```csharp
public string FilenameDatetimeFormat { get; }
```

- *Type:* string

---

##### `FilenamePrefix`<sup>Required</sup> <a name="FilenamePrefix" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefix"></a>

```csharp
public string FilenamePrefix { get; }
```

- *Type:* string

---

##### `FilenameSuffix`<sup>Required</sup> <a name="FilenameSuffix" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffix"></a>

```csharp
public string FilenameSuffix { get; }
```

- *Type:* string

---

##### `MaxBytes`<sup>Required</sup> <a name="MaxBytes" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytes"></a>

```csharp
public double MaxBytes { get; }
```

- *Type:* double

---

##### `MaxDuration`<sup>Required</sup> <a name="MaxDuration" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxDuration"></a>

```csharp
public string MaxDuration { get; }
```

- *Type:* string

---

##### `MaxMessages`<sup>Required</sup> <a name="MaxMessages" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.property.maxMessages"></a>

```csharp
public double MaxMessages { get; }
```

- *Type:* double

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TextConfig`<sup>Required</sup> <a name="TextConfig" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.property.textConfig"></a>

```csharp
public DataGooglePubsubSubscriptionCloudStorageConfigTextConfigList TextConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigList">DataGooglePubsubSubscriptionCloudStorageConfigTextConfigList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigOutputReference.property.internalValue"></a>

```csharp
public DataGooglePubsubSubscriptionCloudStorageConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfig">DataGooglePubsubSubscriptionCloudStorageConfig</a>

---


### DataGooglePubsubSubscriptionCloudStorageConfigTextConfigList <a name="DataGooglePubsubSubscriptionCloudStorageConfigTextConfigList" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionCloudStorageConfigTextConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigList.get"></a>

```csharp
private DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference <a name="DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfig">DataGooglePubsubSubscriptionCloudStorageConfigTextConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfigOutputReference.property.internalValue"></a>

```csharp
public DataGooglePubsubSubscriptionCloudStorageConfigTextConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionCloudStorageConfigTextConfig">DataGooglePubsubSubscriptionCloudStorageConfigTextConfig</a>

---


### DataGooglePubsubSubscriptionDeadLetterPolicyList <a name="DataGooglePubsubSubscriptionDeadLetterPolicyList" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionDeadLetterPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.get"></a>

```csharp
private DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference <a name="DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopic">DeadLetterTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttempts">MaxDeliveryAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicy">DataGooglePubsubSubscriptionDeadLetterPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeadLetterTopic`<sup>Required</sup> <a name="DeadLetterTopic" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopic"></a>

```csharp
public string DeadLetterTopic { get; }
```

- *Type:* string

---

##### `MaxDeliveryAttempts`<sup>Required</sup> <a name="MaxDeliveryAttempts" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttempts"></a>

```csharp
public double MaxDeliveryAttempts { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.internalValue"></a>

```csharp
public DataGooglePubsubSubscriptionDeadLetterPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicy">DataGooglePubsubSubscriptionDeadLetterPolicy</a>

---


### DataGooglePubsubSubscriptionExpirationPolicyList <a name="DataGooglePubsubSubscriptionExpirationPolicyList" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionExpirationPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.get"></a>

```csharp
private DataGooglePubsubSubscriptionExpirationPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGooglePubsubSubscriptionExpirationPolicyOutputReference <a name="DataGooglePubsubSubscriptionExpirationPolicyOutputReference" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionExpirationPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.property.ttl">Ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicy">DataGooglePubsubSubscriptionExpirationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.property.ttl"></a>

```csharp
public string Ttl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.property.internalValue"></a>

```csharp
public DataGooglePubsubSubscriptionExpirationPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicy">DataGooglePubsubSubscriptionExpirationPolicy</a>

---


### DataGooglePubsubSubscriptionMessageTransformsAiInferenceList <a name="DataGooglePubsubSubscriptionMessageTransformsAiInferenceList" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionMessageTransformsAiInferenceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceList.get"></a>

```csharp
private DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference <a name="DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.unstructuredInference">UnstructuredInference</a></code> | <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceList">DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInference">DataGooglePubsubSubscriptionMessageTransformsAiInference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; }
```

- *Type:* string

---

##### `UnstructuredInference`<sup>Required</sup> <a name="UnstructuredInference" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.unstructuredInference"></a>

```csharp
public DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceList UnstructuredInference { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceList">DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceOutputReference.property.internalValue"></a>

```csharp
public DataGooglePubsubSubscriptionMessageTransformsAiInference InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInference">DataGooglePubsubSubscriptionMessageTransformsAiInference</a>

---


### DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceList <a name="DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceList" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceList.get"></a>

```csharp
private DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference <a name="DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.parameters">Parameters</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference">DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.parameters"></a>

```csharp
public StringMap Parameters { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.internalValue"></a>

```csharp
public DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference">DataGooglePubsubSubscriptionMessageTransformsAiInferenceUnstructuredInference</a>

---


### DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfList <a name="DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfList" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfList.get"></a>

```csharp
private DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference <a name="DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.functionName">FunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdf">DataGooglePubsubSubscriptionMessageTransformsJavascriptUdf</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.functionName"></a>

```csharp
public string FunctionName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfOutputReference.property.internalValue"></a>

```csharp
public DataGooglePubsubSubscriptionMessageTransformsJavascriptUdf InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdf">DataGooglePubsubSubscriptionMessageTransformsJavascriptUdf</a>

---


### DataGooglePubsubSubscriptionMessageTransformsList <a name="DataGooglePubsubSubscriptionMessageTransformsList" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionMessageTransformsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsList.get"></a>

```csharp
private DataGooglePubsubSubscriptionMessageTransformsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGooglePubsubSubscriptionMessageTransformsOutputReference <a name="DataGooglePubsubSubscriptionMessageTransformsOutputReference" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionMessageTransformsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.property.aiInference">AiInference</a></code> | <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceList">DataGooglePubsubSubscriptionMessageTransformsAiInferenceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.property.disabled">Disabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.property.javascriptUdf">JavascriptUdf</a></code> | <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfList">DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransforms">DataGooglePubsubSubscriptionMessageTransforms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AiInference`<sup>Required</sup> <a name="AiInference" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.property.aiInference"></a>

```csharp
public DataGooglePubsubSubscriptionMessageTransformsAiInferenceList AiInference { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsAiInferenceList">DataGooglePubsubSubscriptionMessageTransformsAiInferenceList</a>

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.property.disabled"></a>

```csharp
public IResolvable Disabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `JavascriptUdf`<sup>Required</sup> <a name="JavascriptUdf" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.property.javascriptUdf"></a>

```csharp
public DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfList JavascriptUdf { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfList">DataGooglePubsubSubscriptionMessageTransformsJavascriptUdfList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransformsOutputReference.property.internalValue"></a>

```csharp
public DataGooglePubsubSubscriptionMessageTransforms InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionMessageTransforms">DataGooglePubsubSubscriptionMessageTransforms</a>

---


### DataGooglePubsubSubscriptionPushConfigList <a name="DataGooglePubsubSubscriptionPushConfigList" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionPushConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.get"></a>

```csharp
private DataGooglePubsubSubscriptionPushConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGooglePubsubSubscriptionPushConfigNoWrapperList <a name="DataGooglePubsubSubscriptionPushConfigNoWrapperList" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionPushConfigNoWrapperList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperList.get"></a>

```csharp
private DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference <a name="DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadata">WriteMetadata</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapper">DataGooglePubsubSubscriptionPushConfigNoWrapper</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WriteMetadata`<sup>Required</sup> <a name="WriteMetadata" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadata"></a>

```csharp
public IResolvable WriteMetadata { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperOutputReference.property.internalValue"></a>

```csharp
public DataGooglePubsubSubscriptionPushConfigNoWrapper InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapper">DataGooglePubsubSubscriptionPushConfigNoWrapper</a>

---


### DataGooglePubsubSubscriptionPushConfigOidcTokenList <a name="DataGooglePubsubSubscriptionPushConfigOidcTokenList" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionPushConfigOidcTokenList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.get"></a>

```csharp
private DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference <a name="DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.audience">Audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcToken">DataGooglePubsubSubscriptionPushConfigOidcToken</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.audience"></a>

```csharp
public string Audience { get; }
```

- *Type:* string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.internalValue"></a>

```csharp
public DataGooglePubsubSubscriptionPushConfigOidcToken InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcToken">DataGooglePubsubSubscriptionPushConfigOidcToken</a>

---


### DataGooglePubsubSubscriptionPushConfigOutputReference <a name="DataGooglePubsubSubscriptionPushConfigOutputReference" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionPushConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.attributes">Attributes</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.noWrapper">NoWrapper</a></code> | <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperList">DataGooglePubsubSubscriptionPushConfigNoWrapperList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.oidcToken">OidcToken</a></code> | <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList">DataGooglePubsubSubscriptionPushConfigOidcTokenList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.pushEndpoint">PushEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfig">DataGooglePubsubSubscriptionPushConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.attributes"></a>

```csharp
public StringMap Attributes { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `NoWrapper`<sup>Required</sup> <a name="NoWrapper" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.noWrapper"></a>

```csharp
public DataGooglePubsubSubscriptionPushConfigNoWrapperList NoWrapper { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigNoWrapperList">DataGooglePubsubSubscriptionPushConfigNoWrapperList</a>

---

##### `OidcToken`<sup>Required</sup> <a name="OidcToken" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.oidcToken"></a>

```csharp
public DataGooglePubsubSubscriptionPushConfigOidcTokenList OidcToken { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList">DataGooglePubsubSubscriptionPushConfigOidcTokenList</a>

---

##### `PushEndpoint`<sup>Required</sup> <a name="PushEndpoint" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.pushEndpoint"></a>

```csharp
public string PushEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.internalValue"></a>

```csharp
public DataGooglePubsubSubscriptionPushConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfig">DataGooglePubsubSubscriptionPushConfig</a>

---


### DataGooglePubsubSubscriptionRetryPolicyList <a name="DataGooglePubsubSubscriptionRetryPolicyList" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionRetryPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.get"></a>

```csharp
private DataGooglePubsubSubscriptionRetryPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGooglePubsubSubscriptionRetryPolicyOutputReference <a name="DataGooglePubsubSubscriptionRetryPolicyOutputReference" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGooglePubsubSubscriptionRetryPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoff">MaximumBackoff</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoff">MinimumBackoff</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicy">DataGooglePubsubSubscriptionRetryPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaximumBackoff`<sup>Required</sup> <a name="MaximumBackoff" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoff"></a>

```csharp
public string MaximumBackoff { get; }
```

- *Type:* string

---

##### `MinimumBackoff`<sup>Required</sup> <a name="MinimumBackoff" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoff"></a>

```csharp
public string MinimumBackoff { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.property.internalValue"></a>

```csharp
public DataGooglePubsubSubscriptionRetryPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicy">DataGooglePubsubSubscriptionRetryPolicy</a>

---



