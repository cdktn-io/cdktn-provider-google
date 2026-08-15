# `ephemeralGoogleServiceAccountJwt` Submodule <a name="`ephemeralGoogleServiceAccountJwt` Submodule" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralGoogleServiceAccountJwt <a name="EphemeralGoogleServiceAccountJwt" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/service_account_jwt google_service_account_jwt}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer"></a>

```typescript
import { ephemeralGoogleServiceAccountJwt } from '@cdktn/provider-google'

new ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt(scope: Construct, id: string, config: EphemeralGoogleServiceAccountJwtConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig">EphemeralGoogleServiceAccountJwtConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig">EphemeralGoogleServiceAccountJwtConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.resetDelegates">resetDelegates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.resetExpiresIn">resetExpiresIn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDelegates` <a name="resetDelegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.resetDelegates"></a>

```typescript
public resetDelegates(): void
```

##### `resetExpiresIn` <a name="resetExpiresIn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.resetExpiresIn"></a>

```typescript
public resetExpiresIn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isConstruct"></a>

```typescript
import { ephemeralGoogleServiceAccountJwt } from '@cdktn/provider-google'

ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isTerraformElement"></a>

```typescript
import { ephemeralGoogleServiceAccountJwt } from '@cdktn/provider-google'

ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralGoogleServiceAccountJwt } from '@cdktn/provider-google'

ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.jwt">jwt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.delegatesInput">delegatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.expiresInInput">expiresInInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.payloadInput">payloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.targetServiceAccountInput">targetServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.delegates">delegates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.expiresIn">expiresIn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.payload">payload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.targetServiceAccount">targetServiceAccount</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `jwt`<sup>Required</sup> <a name="jwt" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.jwt"></a>

```typescript
public readonly jwt: string;
```

- *Type:* string

---

##### `delegatesInput`<sup>Optional</sup> <a name="delegatesInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.delegatesInput"></a>

```typescript
public readonly delegatesInput: string[];
```

- *Type:* string[]

---

##### `expiresInInput`<sup>Optional</sup> <a name="expiresInInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.expiresInInput"></a>

```typescript
public readonly expiresInInput: number;
```

- *Type:* number

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.payloadInput"></a>

```typescript
public readonly payloadInput: string;
```

- *Type:* string

---

##### `targetServiceAccountInput`<sup>Optional</sup> <a name="targetServiceAccountInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.targetServiceAccountInput"></a>

```typescript
public readonly targetServiceAccountInput: string;
```

- *Type:* string

---

##### `delegates`<sup>Required</sup> <a name="delegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.delegates"></a>

```typescript
public readonly delegates: string[];
```

- *Type:* string[]

---

##### `expiresIn`<sup>Required</sup> <a name="expiresIn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.expiresIn"></a>

```typescript
public readonly expiresIn: number;
```

- *Type:* number

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.payload"></a>

```typescript
public readonly payload: string;
```

- *Type:* string

---

##### `targetServiceAccount`<sup>Required</sup> <a name="targetServiceAccount" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.targetServiceAccount"></a>

```typescript
public readonly targetServiceAccount: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralGoogleServiceAccountJwtConfig <a name="EphemeralGoogleServiceAccountJwtConfig" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.Initializer"></a>

```typescript
import { ephemeralGoogleServiceAccountJwt } from '@cdktn/provider-google'

const ephemeralGoogleServiceAccountJwtConfig: ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.payload">payload</a></code> | <code>string</code> | A JSON-encoded JWT claims set that will be included in the signed JWT. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.targetServiceAccount">targetServiceAccount</a></code> | <code>string</code> | The email of the service account that will sign the JWT. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.delegates">delegates</a></code> | <code>string[]</code> | Delegate chain of approvals needed to perform full impersonation. Specify the fully qualified service account name. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.expiresIn">expiresIn</a></code> | <code>number</code> | Number of seconds until the JWT expires. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.payload"></a>

```typescript
public readonly payload: string;
```

- *Type:* string

A JSON-encoded JWT claims set that will be included in the signed JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/service_account_jwt#payload EphemeralGoogleServiceAccountJwt#payload}

---

##### `targetServiceAccount`<sup>Required</sup> <a name="targetServiceAccount" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.targetServiceAccount"></a>

```typescript
public readonly targetServiceAccount: string;
```

- *Type:* string

The email of the service account that will sign the JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/service_account_jwt#target_service_account EphemeralGoogleServiceAccountJwt#target_service_account}

---

##### `delegates`<sup>Optional</sup> <a name="delegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.delegates"></a>

```typescript
public readonly delegates: string[];
```

- *Type:* string[]

Delegate chain of approvals needed to perform full impersonation. Specify the fully qualified service account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/service_account_jwt#delegates EphemeralGoogleServiceAccountJwt#delegates}

---

##### `expiresIn`<sup>Optional</sup> <a name="expiresIn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.expiresIn"></a>

```typescript
public readonly expiresIn: number;
```

- *Type:* number

Number of seconds until the JWT expires.

If set and non-zero an `exp` claim will be added to the payload derived from the current timestamp plus expires_in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/service_account_jwt#expires_in EphemeralGoogleServiceAccountJwt#expires_in}

---



