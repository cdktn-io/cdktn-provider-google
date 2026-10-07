# `dataGoogleNetworkServicesGateway` Submodule <a name="`dataGoogleNetworkServicesGateway` Submodule" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleNetworkServicesGateway <a name="DataGoogleNetworkServicesGateway" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway google_network_services_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleNetworkServicesGateway(Construct Scope, string Id, DataGoogleNetworkServicesGatewayConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig">DataGoogleNetworkServicesGatewayConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig">DataGoogleNetworkServicesGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleNetworkServicesGateway resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleNetworkServicesGateway.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleNetworkServicesGateway.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleNetworkServicesGateway.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleNetworkServicesGateway.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleNetworkServicesGateway resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleNetworkServicesGateway to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleNetworkServicesGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleNetworkServicesGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.addresses">Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.allowGlobalAccess">AllowGlobalAccess</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.allPorts">AllPorts</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.certificateUrls">CertificateUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.deleteSwgAutogenRouterOnDestroy">DeleteSwgAutogenRouterOnDestroy</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.envoyHeaders">EnvoyHeaders</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.gatewaySecurityPolicy">GatewaySecurityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.ipVersion">IpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.labels">Labels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.ports">Ports</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.routingMode">RoutingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.serverTlsPolicy">ServerTlsPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.subnetwork">Subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.addresses"></a>

```csharp
public string[] Addresses { get; }
```

- *Type:* string[]

---

##### `AllowGlobalAccess`<sup>Required</sup> <a name="AllowGlobalAccess" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.allowGlobalAccess"></a>

```csharp
public IResolvable AllowGlobalAccess { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `AllPorts`<sup>Required</sup> <a name="AllPorts" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.allPorts"></a>

```csharp
public IResolvable AllPorts { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `CertificateUrls`<sup>Required</sup> <a name="CertificateUrls" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.certificateUrls"></a>

```csharp
public string[] CertificateUrls { get; }
```

- *Type:* string[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DeleteSwgAutogenRouterOnDestroy`<sup>Required</sup> <a name="DeleteSwgAutogenRouterOnDestroy" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.deleteSwgAutogenRouterOnDestroy"></a>

```csharp
public IResolvable DeleteSwgAutogenRouterOnDestroy { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EnvoyHeaders`<sup>Required</sup> <a name="EnvoyHeaders" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.envoyHeaders"></a>

```csharp
public string EnvoyHeaders { get; }
```

- *Type:* string

---

##### `GatewaySecurityPolicy`<sup>Required</sup> <a name="GatewaySecurityPolicy" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.gatewaySecurityPolicy"></a>

```csharp
public string GatewaySecurityPolicy { get; }
```

- *Type:* string

---

##### `IpVersion`<sup>Required</sup> <a name="IpVersion" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.ipVersion"></a>

```csharp
public string IpVersion { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.ports"></a>

```csharp
public double[] Ports { get; }
```

- *Type:* double[]

---

##### `RoutingMode`<sup>Required</sup> <a name="RoutingMode" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.routingMode"></a>

```csharp
public string RoutingMode { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `ServerTlsPolicy`<sup>Required</sup> <a name="ServerTlsPolicy" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.serverTlsPolicy"></a>

```csharp
public string ServerTlsPolicy { get; }
```

- *Type:* string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.subnetwork"></a>

```csharp
public string Subnetwork { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGateway.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleNetworkServicesGatewayConfig <a name="DataGoogleNetworkServicesGatewayConfig" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleNetworkServicesGatewayConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Name,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.location">Location</a></code> | <code>string</code> | The location of the gateway. The default value is 'global'. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.name">Name</a></code> | <code>string</code> | Name of the Gateway resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway#id DataGoogleNetworkServicesGateway#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway#project DataGoogleNetworkServicesGateway#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the gateway. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway#location DataGoogleNetworkServicesGateway#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the Gateway resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway#name DataGoogleNetworkServicesGateway#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway#id DataGoogleNetworkServicesGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleNetworkServicesGateway.DataGoogleNetworkServicesGatewayConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/network_services_gateway#project DataGoogleNetworkServicesGateway#project}.

---



