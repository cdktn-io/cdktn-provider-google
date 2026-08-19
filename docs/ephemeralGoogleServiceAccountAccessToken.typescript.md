# `ephemeralGoogleServiceAccountAccessToken` Submodule <a name="`ephemeralGoogleServiceAccountAccessToken` Submodule" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralGoogleServiceAccountAccessToken <a name="EphemeralGoogleServiceAccountAccessToken" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_access_token google_service_account_access_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer"></a>

```typescript
import { ephemeralGoogleServiceAccountAccessToken } from '@cdktn/provider-google'

new ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken(scope: Construct, id: string, config: EphemeralGoogleServiceAccountAccessTokenConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig">EphemeralGoogleServiceAccountAccessTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig">EphemeralGoogleServiceAccountAccessTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.resetDelegates">resetDelegates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.resetLifetime">resetLifetime</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDelegates` <a name="resetDelegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.resetDelegates"></a>

```typescript
public resetDelegates(): void
```

##### `resetLifetime` <a name="resetLifetime" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.resetLifetime"></a>

```typescript
public resetLifetime(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.isConstruct"></a>

```typescript
import { ephemeralGoogleServiceAccountAccessToken } from '@cdktn/provider-google'

ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.isTerraformElement"></a>

```typescript
import { ephemeralGoogleServiceAccountAccessToken } from '@cdktn/provider-google'

ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralGoogleServiceAccountAccessToken } from '@cdktn/provider-google'

ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.delegatesInput">delegatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.lifetimeInput">lifetimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.targetServiceAccountInput">targetServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.delegates">delegates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.lifetime">lifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.targetServiceAccount">targetServiceAccount</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

##### `delegatesInput`<sup>Optional</sup> <a name="delegatesInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.delegatesInput"></a>

```typescript
public readonly delegatesInput: string[];
```

- *Type:* string[]

---

##### `lifetimeInput`<sup>Optional</sup> <a name="lifetimeInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.lifetimeInput"></a>

```typescript
public readonly lifetimeInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `targetServiceAccountInput`<sup>Optional</sup> <a name="targetServiceAccountInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.targetServiceAccountInput"></a>

```typescript
public readonly targetServiceAccountInput: string;
```

- *Type:* string

---

##### `delegates`<sup>Required</sup> <a name="delegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.delegates"></a>

```typescript
public readonly delegates: string[];
```

- *Type:* string[]

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.lifetime"></a>

```typescript
public readonly lifetime: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `targetServiceAccount`<sup>Required</sup> <a name="targetServiceAccount" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.targetServiceAccount"></a>

```typescript
public readonly targetServiceAccount: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessToken.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralGoogleServiceAccountAccessTokenConfig <a name="EphemeralGoogleServiceAccountAccessTokenConfig" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.Initializer"></a>

```typescript
import { ephemeralGoogleServiceAccountAccessToken } from '@cdktn/provider-google'

const ephemeralGoogleServiceAccountAccessTokenConfig: ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.scopes">scopes</a></code> | <code>string[]</code> | The scopes the new credential should have (e.g. `['cloud-platform']`). |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.targetServiceAccount">targetServiceAccount</a></code> | <code>string</code> | The service account to impersonate (e.g. `service_B@your-project-id.iam.gserviceaccount.com`). |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.delegates">delegates</a></code> | <code>string[]</code> | Delegate chain of approvals needed to perform full impersonation. Specify the fully qualified service account name.  (e.g. `['projects/-/serviceAccounts/delegate-svc-account@project-id.iam.gserviceaccount.com']`). |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.lifetime">lifetime</a></code> | <code>string</code> | Lifetime of the impersonated token (defaults to its max: `3600s`). |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

The scopes the new credential should have (e.g. `['cloud-platform']`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_access_token#scopes EphemeralGoogleServiceAccountAccessToken#scopes}

---

##### `targetServiceAccount`<sup>Required</sup> <a name="targetServiceAccount" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.targetServiceAccount"></a>

```typescript
public readonly targetServiceAccount: string;
```

- *Type:* string

The service account to impersonate (e.g. `service_B@your-project-id.iam.gserviceaccount.com`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_access_token#target_service_account EphemeralGoogleServiceAccountAccessToken#target_service_account}

---

##### `delegates`<sup>Optional</sup> <a name="delegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.delegates"></a>

```typescript
public readonly delegates: string[];
```

- *Type:* string[]

Delegate chain of approvals needed to perform full impersonation. Specify the fully qualified service account name.  (e.g. `['projects/-/serviceAccounts/delegate-svc-account@project-id.iam.gserviceaccount.com']`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_access_token#delegates EphemeralGoogleServiceAccountAccessToken#delegates}

---

##### `lifetime`<sup>Optional</sup> <a name="lifetime" id="@cdktn/provider-google.ephemeralGoogleServiceAccountAccessToken.EphemeralGoogleServiceAccountAccessTokenConfig.property.lifetime"></a>

```typescript
public readonly lifetime: string;
```

- *Type:* string

Lifetime of the impersonated token (defaults to its max: `3600s`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_access_token#lifetime EphemeralGoogleServiceAccountAccessToken#lifetime}

---



