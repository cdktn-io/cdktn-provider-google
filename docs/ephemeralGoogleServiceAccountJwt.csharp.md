# `ephemeralGoogleServiceAccountJwt` Submodule <a name="`ephemeralGoogleServiceAccountJwt` Submodule" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralGoogleServiceAccountJwt <a name="EphemeralGoogleServiceAccountJwt" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_jwt google_service_account_jwt}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new EphemeralGoogleServiceAccountJwt(Construct Scope, string Id, EphemeralGoogleServiceAccountJwtConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig">EphemeralGoogleServiceAccountJwtConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig">EphemeralGoogleServiceAccountJwtConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.resetDelegates">ResetDelegates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.resetExpiresIn">ResetExpiresIn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDelegates` <a name="ResetDelegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.resetDelegates"></a>

```csharp
private void ResetDelegates()
```

##### `ResetExpiresIn` <a name="ResetExpiresIn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.resetExpiresIn"></a>

```csharp
private void ResetExpiresIn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

EphemeralGoogleServiceAccountJwt.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

EphemeralGoogleServiceAccountJwt.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isTerraformEphemeralResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

EphemeralGoogleServiceAccountJwt.IsTerraformEphemeralResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.jwt">Jwt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.delegatesInput">DelegatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.expiresInInput">ExpiresInInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.payloadInput">PayloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.targetServiceAccountInput">TargetServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.delegates">Delegates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.expiresIn">ExpiresIn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.payload">Payload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.targetServiceAccount">TargetServiceAccount</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Jwt`<sup>Required</sup> <a name="Jwt" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.jwt"></a>

```csharp
public string Jwt { get; }
```

- *Type:* string

---

##### `DelegatesInput`<sup>Optional</sup> <a name="DelegatesInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.delegatesInput"></a>

```csharp
public string[] DelegatesInput { get; }
```

- *Type:* string[]

---

##### `ExpiresInInput`<sup>Optional</sup> <a name="ExpiresInInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.expiresInInput"></a>

```csharp
public double ExpiresInInput { get; }
```

- *Type:* double

---

##### `PayloadInput`<sup>Optional</sup> <a name="PayloadInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.payloadInput"></a>

```csharp
public string PayloadInput { get; }
```

- *Type:* string

---

##### `TargetServiceAccountInput`<sup>Optional</sup> <a name="TargetServiceAccountInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.targetServiceAccountInput"></a>

```csharp
public string TargetServiceAccountInput { get; }
```

- *Type:* string

---

##### `Delegates`<sup>Required</sup> <a name="Delegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.delegates"></a>

```csharp
public string[] Delegates { get; }
```

- *Type:* string[]

---

##### `ExpiresIn`<sup>Required</sup> <a name="ExpiresIn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.expiresIn"></a>

```csharp
public double ExpiresIn { get; }
```

- *Type:* double

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.payload"></a>

```csharp
public string Payload { get; }
```

- *Type:* string

---

##### `TargetServiceAccount`<sup>Required</sup> <a name="TargetServiceAccount" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.targetServiceAccount"></a>

```csharp
public string TargetServiceAccount { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralGoogleServiceAccountJwtConfig <a name="EphemeralGoogleServiceAccountJwtConfig" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new EphemeralGoogleServiceAccountJwtConfig {
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformEphemeralResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    string Payload,
    string TargetServiceAccount,
    string[] Delegates = null,
    double ExpiresIn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.payload">Payload</a></code> | <code>string</code> | A JSON-encoded JWT claims set that will be included in the signed JWT. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.targetServiceAccount">TargetServiceAccount</a></code> | <code>string</code> | The email of the service account that will sign the JWT. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.delegates">Delegates</a></code> | <code>string[]</code> | Delegate chain of approvals needed to perform full impersonation. Specify the fully qualified service account name. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.expiresIn">ExpiresIn</a></code> | <code>double</code> | Number of seconds until the JWT expires. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.payload"></a>

```csharp
public string Payload { get; set; }
```

- *Type:* string

A JSON-encoded JWT claims set that will be included in the signed JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_jwt#payload EphemeralGoogleServiceAccountJwt#payload}

---

##### `TargetServiceAccount`<sup>Required</sup> <a name="TargetServiceAccount" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.targetServiceAccount"></a>

```csharp
public string TargetServiceAccount { get; set; }
```

- *Type:* string

The email of the service account that will sign the JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_jwt#target_service_account EphemeralGoogleServiceAccountJwt#target_service_account}

---

##### `Delegates`<sup>Optional</sup> <a name="Delegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.delegates"></a>

```csharp
public string[] Delegates { get; set; }
```

- *Type:* string[]

Delegate chain of approvals needed to perform full impersonation. Specify the fully qualified service account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_jwt#delegates EphemeralGoogleServiceAccountJwt#delegates}

---

##### `ExpiresIn`<sup>Optional</sup> <a name="ExpiresIn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.expiresIn"></a>

```csharp
public double ExpiresIn { get; set; }
```

- *Type:* double

Number of seconds until the JWT expires.

If set and non-zero an `exp` claim will be added to the payload derived from the current timestamp plus expires_in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_jwt#expires_in EphemeralGoogleServiceAccountJwt#expires_in}

---



