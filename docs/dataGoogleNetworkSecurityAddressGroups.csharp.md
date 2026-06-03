# `dataGoogleNetworkSecurityAddressGroups` Submodule <a name="`dataGoogleNetworkSecurityAddressGroups` Submodule" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleNetworkSecurityAddressGroups <a name="DataGoogleNetworkSecurityAddressGroups" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/network_security_address_groups google_network_security_address_groups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleNetworkSecurityAddressGroups(Construct Scope, string Id, DataGoogleNetworkSecurityAddressGroupsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig">DataGoogleNetworkSecurityAddressGroupsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig">DataGoogleNetworkSecurityAddressGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetParent">ResetParent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetParent` <a name="ResetParent" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetParent"></a>

```csharp
private void ResetParent()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleNetworkSecurityAddressGroups resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleNetworkSecurityAddressGroups.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleNetworkSecurityAddressGroups.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleNetworkSecurityAddressGroups.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleNetworkSecurityAddressGroups.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleNetworkSecurityAddressGroups resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleNetworkSecurityAddressGroups to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleNetworkSecurityAddressGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/network_security_address_groups#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleNetworkSecurityAddressGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.addressGroups">AddressGroups</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList">DataGoogleNetworkSecurityAddressGroupsAddressGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AddressGroups`<sup>Required</sup> <a name="AddressGroups" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.addressGroups"></a>

```csharp
public DataGoogleNetworkSecurityAddressGroupsAddressGroupsList AddressGroups { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList">DataGoogleNetworkSecurityAddressGroupsAddressGroupsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleNetworkSecurityAddressGroupsAddressGroups <a name="DataGoogleNetworkSecurityAddressGroupsAddressGroups" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroups.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleNetworkSecurityAddressGroupsAddressGroups {

};
```


### DataGoogleNetworkSecurityAddressGroupsConfig <a name="DataGoogleNetworkSecurityAddressGroupsConfig" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleNetworkSecurityAddressGroupsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Id = null,
    string Parent = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/network_security_address_groups#location DataGoogleNetworkSecurityAddressGroups#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/network_security_address_groups#id DataGoogleNetworkSecurityAddressGroups#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.parent">Parent</a></code> | <code>string</code> | The parent of the Address Group. Use "organizations/{organization_id}" for organization-level address groups or "projects/{project_id}" for project-level address groups. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/network_security_address_groups#project DataGoogleNetworkSecurityAddressGroups#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/network_security_address_groups#location DataGoogleNetworkSecurityAddressGroups#location}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/network_security_address_groups#id DataGoogleNetworkSecurityAddressGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The parent of the Address Group. Use "organizations/{organization_id}" for organization-level address groups or "projects/{project_id}" for project-level address groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/network_security_address_groups#parent DataGoogleNetworkSecurityAddressGroups#parent}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/network_security_address_groups#project DataGoogleNetworkSecurityAddressGroups#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleNetworkSecurityAddressGroupsAddressGroupsList <a name="DataGoogleNetworkSecurityAddressGroupsAddressGroupsList" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleNetworkSecurityAddressGroupsAddressGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.get"></a>

```csharp
private DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference <a name="DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.capacity">Capacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.items">Items</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroups">DataGoogleNetworkSecurityAddressGroupsAddressGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.capacity"></a>

```csharp
public double Capacity { get; }
```

- *Type:* double

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.items"></a>

```csharp
public string[] Items { get; }
```

- *Type:* string[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleNetworkSecurityAddressGroupsAddressGroups InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroups">DataGoogleNetworkSecurityAddressGroupsAddressGroups</a>

---



