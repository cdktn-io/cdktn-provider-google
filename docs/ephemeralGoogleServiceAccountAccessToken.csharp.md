# `ephemeralGoogleServiceAccountAccessToken` Submodule <a name="`ephemeralGoogleServiceAccountAccessToken` Submodule" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralGoogleServiceAccountAccessToken <a name="EphemeralGoogleServiceAccountAccessToken" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/service_account_access_token google_service_account_access_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new EphemeralGoogleServiceAccountAccessToken(Construct Scope, string Id, EphemeralGoogleServiceAccountAccessTokenConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig">EphemeralGoogleServiceAccountAccessTokenConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig">EphemeralGoogleServiceAccountAccessTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.resetDelegates">ResetDelegates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.resetLifetime">ResetLifetime</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDelegates` <a name="ResetDelegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.resetDelegates"></a>

```csharp
private void ResetDelegates()
```

##### `ResetLifetime` <a name="ResetLifetime" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.resetLifetime"></a>

```csharp
private void ResetLifetime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

EphemeralGoogleServiceAccountAccessToken.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

EphemeralGoogleServiceAccountAccessToken.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.isTerraformEphemeralResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

EphemeralGoogleServiceAccountAccessToken.IsTerraformEphemeralResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.accessToken">AccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.delegatesInput">DelegatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.lifetimeInput">LifetimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.targetServiceAccountInput">TargetServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.delegates">Delegates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.lifetime">Lifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.targetServiceAccount">TargetServiceAccount</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.accessToken"></a>

```csharp
public string AccessToken { get; }
```

- *Type:* string

---

##### `DelegatesInput`<sup>Optional</sup> <a name="DelegatesInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.delegatesInput"></a>

```csharp
public string[] DelegatesInput { get; }
```

- *Type:* string[]

---

##### `LifetimeInput`<sup>Optional</sup> <a name="LifetimeInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.lifetimeInput"></a>

```csharp
public string LifetimeInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `TargetServiceAccountInput`<sup>Optional</sup> <a name="TargetServiceAccountInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.targetServiceAccountInput"></a>

```csharp
public string TargetServiceAccountInput { get; }
```

- *Type:* string

---

##### `Delegates`<sup>Required</sup> <a name="Delegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.delegates"></a>

```csharp
public string[] Delegates { get; }
```

- *Type:* string[]

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.lifetime"></a>

```csharp
public string Lifetime { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `TargetServiceAccount`<sup>Required</sup> <a name="TargetServiceAccount" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.targetServiceAccount"></a>

```csharp
public string TargetServiceAccount { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralGoogleServiceAccountAccessTokenConfig <a name="EphemeralGoogleServiceAccountAccessTokenConfig" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new EphemeralGoogleServiceAccountAccessTokenConfig {
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformEphemeralResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    string[] Scopes,
    string TargetServiceAccount,
    string[] Delegates = null,
    string Lifetime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.scopes">Scopes</a></code> | <code>string[]</code> | The scopes the new credential should have (e.g. `['cloud-platform']`). |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.targetServiceAccount">TargetServiceAccount</a></code> | <code>string</code> | The service account to impersonate (e.g. `service_B@your-project-id.iam.gserviceaccount.com`). |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.delegates">Delegates</a></code> | <code>string[]</code> | Delegate chain of approvals needed to perform full impersonation. Specify the fully qualified service account name.  (e.g. `['projects/-/serviceAccounts/delegate-svc-account@project-id.iam.gserviceaccount.com']`). |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.lifetime">Lifetime</a></code> | <code>string</code> | Lifetime of the impersonated token (defaults to its max: `3600s`). |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

The scopes the new credential should have (e.g. `['cloud-platform']`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/service_account_access_token#scopes EphemeralGoogleServiceAccountAccessToken#scopes}

---

##### `TargetServiceAccount`<sup>Required</sup> <a name="TargetServiceAccount" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.targetServiceAccount"></a>

```csharp
public string TargetServiceAccount { get; set; }
```

- *Type:* string

The service account to impersonate (e.g. `service_B@your-project-id.iam.gserviceaccount.com`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/service_account_access_token#target_service_account EphemeralGoogleServiceAccountAccessToken#target_service_account}

---

##### `Delegates`<sup>Optional</sup> <a name="Delegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.delegates"></a>

```csharp
public string[] Delegates { get; set; }
```

- *Type:* string[]

Delegate chain of approvals needed to perform full impersonation. Specify the fully qualified service account name.  (e.g. `['projects/-/serviceAccounts/delegate-svc-account@project-id.iam.gserviceaccount.com']`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/service_account_access_token#delegates EphemeralGoogleServiceAccountAccessToken#delegates}

---

##### `Lifetime`<sup>Optional</sup> <a name="Lifetime" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.lifetime"></a>

```csharp
public string Lifetime { get; set; }
```

- *Type:* string

Lifetime of the impersonated token (defaults to its max: `3600s`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/service_account_access_token#lifetime EphemeralGoogleServiceAccountAccessToken#lifetime}

---



