# `apigeeEnvironmentDebugmask` Submodule <a name="`apigeeEnvironmentDebugmask` Submodule" id="@cdktn/provider-google.apigeeEnvironmentDebugmask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeEnvironmentDebugmask <a name="ApigeeEnvironmentDebugmask" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_debugmask google_apigee_environment_debugmask}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer"></a>

```typescript
import { apigeeEnvironmentDebugmask } from '@cdktn/provider-google'

new apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask(scope: Construct, id: string, config: ApigeeEnvironmentDebugmaskConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig">ApigeeEnvironmentDebugmaskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig">ApigeeEnvironmentDebugmaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetFaultXPaths">resetFaultXPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetNamespaces">resetNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetRequestJsonPaths">resetRequestJsonPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetRequestXPaths">resetRequestXPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetResponseJsonPaths">resetResponseJsonPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetResponseXPaths">resetResponseXPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetVariables">resetVariables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.putTimeouts"></a>

```typescript
public putTimeouts(value: ApigeeEnvironmentDebugmaskTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeouts">ApigeeEnvironmentDebugmaskTimeouts</a>

---

##### `resetFaultXPaths` <a name="resetFaultXPaths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetFaultXPaths"></a>

```typescript
public resetFaultXPaths(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespaces` <a name="resetNamespaces" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetNamespaces"></a>

```typescript
public resetNamespaces(): void
```

##### `resetRequestJsonPaths` <a name="resetRequestJsonPaths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetRequestJsonPaths"></a>

```typescript
public resetRequestJsonPaths(): void
```

##### `resetRequestXPaths` <a name="resetRequestXPaths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetRequestXPaths"></a>

```typescript
public resetRequestXPaths(): void
```

##### `resetResponseJsonPaths` <a name="resetResponseJsonPaths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetResponseJsonPaths"></a>

```typescript
public resetResponseJsonPaths(): void
```

##### `resetResponseXPaths` <a name="resetResponseXPaths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetResponseXPaths"></a>

```typescript
public resetResponseXPaths(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVariables` <a name="resetVariables" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.resetVariables"></a>

```typescript
public resetVariables(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApigeeEnvironmentDebugmask resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.isConstruct"></a>

```typescript
import { apigeeEnvironmentDebugmask } from '@cdktn/provider-google'

apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.isTerraformElement"></a>

```typescript
import { apigeeEnvironmentDebugmask } from '@cdktn/provider-google'

apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.isTerraformResource"></a>

```typescript
import { apigeeEnvironmentDebugmask } from '@cdktn/provider-google'

apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.generateConfigForImport"></a>

```typescript
import { apigeeEnvironmentDebugmask } from '@cdktn/provider-google'

apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApigeeEnvironmentDebugmask resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigeeEnvironmentDebugmask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigeeEnvironmentDebugmask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_debugmask#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApigeeEnvironmentDebugmask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference">ApigeeEnvironmentDebugmaskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.envIdInput">envIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.faultXPathsInput">faultXPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.namespacesInput">namespacesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.requestJsonPathsInput">requestJsonPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.requestXPathsInput">requestXPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.responseJsonPathsInput">responseJsonPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.responseXPathsInput">responseXPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeouts">ApigeeEnvironmentDebugmaskTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.variablesInput">variablesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.envId">envId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.faultXPaths">faultXPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.namespaces">namespaces</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.requestJsonPaths">requestJsonPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.requestXPaths">requestXPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.responseJsonPaths">responseJsonPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.responseXPaths">responseXPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.variables">variables</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.timeouts"></a>

```typescript
public readonly timeouts: ApigeeEnvironmentDebugmaskTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference">ApigeeEnvironmentDebugmaskTimeoutsOutputReference</a>

---

##### `envIdInput`<sup>Optional</sup> <a name="envIdInput" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.envIdInput"></a>

```typescript
public readonly envIdInput: string;
```

- *Type:* string

---

##### `faultXPathsInput`<sup>Optional</sup> <a name="faultXPathsInput" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.faultXPathsInput"></a>

```typescript
public readonly faultXPathsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespacesInput`<sup>Optional</sup> <a name="namespacesInput" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.namespacesInput"></a>

```typescript
public readonly namespacesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requestJsonPathsInput`<sup>Optional</sup> <a name="requestJsonPathsInput" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.requestJsonPathsInput"></a>

```typescript
public readonly requestJsonPathsInput: string[];
```

- *Type:* string[]

---

##### `requestXPathsInput`<sup>Optional</sup> <a name="requestXPathsInput" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.requestXPathsInput"></a>

```typescript
public readonly requestXPathsInput: string[];
```

- *Type:* string[]

---

##### `responseJsonPathsInput`<sup>Optional</sup> <a name="responseJsonPathsInput" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.responseJsonPathsInput"></a>

```typescript
public readonly responseJsonPathsInput: string[];
```

- *Type:* string[]

---

##### `responseXPathsInput`<sup>Optional</sup> <a name="responseXPathsInput" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.responseXPathsInput"></a>

```typescript
public readonly responseXPathsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApigeeEnvironmentDebugmaskTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeouts">ApigeeEnvironmentDebugmaskTimeouts</a>

---

##### `variablesInput`<sup>Optional</sup> <a name="variablesInput" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.variablesInput"></a>

```typescript
public readonly variablesInput: string[];
```

- *Type:* string[]

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.envId"></a>

```typescript
public readonly envId: string;
```

- *Type:* string

---

##### `faultXPaths`<sup>Required</sup> <a name="faultXPaths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.faultXPaths"></a>

```typescript
public readonly faultXPaths: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.namespaces"></a>

```typescript
public readonly namespaces: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requestJsonPaths`<sup>Required</sup> <a name="requestJsonPaths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.requestJsonPaths"></a>

```typescript
public readonly requestJsonPaths: string[];
```

- *Type:* string[]

---

##### `requestXPaths`<sup>Required</sup> <a name="requestXPaths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.requestXPaths"></a>

```typescript
public readonly requestXPaths: string[];
```

- *Type:* string[]

---

##### `responseJsonPaths`<sup>Required</sup> <a name="responseJsonPaths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.responseJsonPaths"></a>

```typescript
public readonly responseJsonPaths: string[];
```

- *Type:* string[]

---

##### `responseXPaths`<sup>Required</sup> <a name="responseXPaths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.responseXPaths"></a>

```typescript
public readonly responseXPaths: string[];
```

- *Type:* string[]

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.variables"></a>

```typescript
public readonly variables: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmask.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeEnvironmentDebugmaskConfig <a name="ApigeeEnvironmentDebugmaskConfig" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.Initializer"></a>

```typescript
import { apigeeEnvironmentDebugmask } from '@cdktn/provider-google'

const apigeeEnvironmentDebugmaskConfig: apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.envId">envId</a></code> | <code>string</code> | The Apigee environment group associated with the Apigee environment, in the format organizations/{{org_name}}/environments/{{env_name}}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.faultXPaths">faultXPaths</a></code> | <code>string[]</code> | List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for fault messages. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_debugmask#id ApigeeEnvironmentDebugmask#id}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.namespaces">namespaces</a></code> | <code>{[ key: string ]: string}</code> | Map of namespaces to URIs. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.requestJsonPaths">requestJsonPaths</a></code> | <code>string[]</code> | List of JSONPath expressions that specify the JSON elements or attributes that the debug mask applies to for request messages. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.requestXPaths">requestXPaths</a></code> | <code>string[]</code> | List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for request messages. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.responseJsonPaths">responseJsonPaths</a></code> | <code>string[]</code> | List of JSONPath expressions that specify the JSON elements or attributes that the debug mask applies to for response messages. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.responseXPaths">responseXPaths</a></code> | <code>string[]</code> | List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for response messages. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeouts">ApigeeEnvironmentDebugmaskTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.variables">variables</a></code> | <code>string[]</code> | List of variables that the debug mask applies to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.envId"></a>

```typescript
public readonly envId: string;
```

- *Type:* string

The Apigee environment group associated with the Apigee environment, in the format organizations/{{org_name}}/environments/{{env_name}}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_debugmask#env_id ApigeeEnvironmentDebugmask#env_id}

---

##### `faultXPaths`<sup>Optional</sup> <a name="faultXPaths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.faultXPaths"></a>

```typescript
public readonly faultXPaths: string[];
```

- *Type:* string[]

List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for fault messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_debugmask#fault_x_paths ApigeeEnvironmentDebugmask#fault_x_paths}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_debugmask#id ApigeeEnvironmentDebugmask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespaces`<sup>Optional</sup> <a name="namespaces" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.namespaces"></a>

```typescript
public readonly namespaces: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of namespaces to URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_debugmask#namespaces ApigeeEnvironmentDebugmask#namespaces}

---

##### `requestJsonPaths`<sup>Optional</sup> <a name="requestJsonPaths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.requestJsonPaths"></a>

```typescript
public readonly requestJsonPaths: string[];
```

- *Type:* string[]

List of JSONPath expressions that specify the JSON elements or attributes that the debug mask applies to for request messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_debugmask#request_json_paths ApigeeEnvironmentDebugmask#request_json_paths}

---

##### `requestXPaths`<sup>Optional</sup> <a name="requestXPaths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.requestXPaths"></a>

```typescript
public readonly requestXPaths: string[];
```

- *Type:* string[]

List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for request messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_debugmask#request_x_paths ApigeeEnvironmentDebugmask#request_x_paths}

---

##### `responseJsonPaths`<sup>Optional</sup> <a name="responseJsonPaths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.responseJsonPaths"></a>

```typescript
public readonly responseJsonPaths: string[];
```

- *Type:* string[]

List of JSONPath expressions that specify the JSON elements or attributes that the debug mask applies to for response messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_debugmask#response_json_paths ApigeeEnvironmentDebugmask#response_json_paths}

---

##### `responseXPaths`<sup>Optional</sup> <a name="responseXPaths" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.responseXPaths"></a>

```typescript
public readonly responseXPaths: string[];
```

- *Type:* string[]

List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for response messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_debugmask#response_x_paths ApigeeEnvironmentDebugmask#response_x_paths}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApigeeEnvironmentDebugmaskTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeouts">ApigeeEnvironmentDebugmaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_debugmask#timeouts ApigeeEnvironmentDebugmask#timeouts}

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskConfig.property.variables"></a>

```typescript
public readonly variables: string[];
```

- *Type:* string[]

List of variables that the debug mask applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_debugmask#variables ApigeeEnvironmentDebugmask#variables}

---

### ApigeeEnvironmentDebugmaskTimeouts <a name="ApigeeEnvironmentDebugmaskTimeouts" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeouts.Initializer"></a>

```typescript
import { apigeeEnvironmentDebugmask } from '@cdktn/provider-google'

const apigeeEnvironmentDebugmaskTimeouts: apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_debugmask#create ApigeeEnvironmentDebugmask#create}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_debugmask#delete ApigeeEnvironmentDebugmask#delete}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_debugmask#update ApigeeEnvironmentDebugmask#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_debugmask#create ApigeeEnvironmentDebugmask#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_debugmask#delete ApigeeEnvironmentDebugmask#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/apigee_environment_debugmask#update ApigeeEnvironmentDebugmask#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeEnvironmentDebugmaskTimeoutsOutputReference <a name="ApigeeEnvironmentDebugmaskTimeoutsOutputReference" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.Initializer"></a>

```typescript
import { apigeeEnvironmentDebugmask } from '@cdktn/provider-google'

new apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeouts">ApigeeEnvironmentDebugmaskTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeEnvironmentDebugmaskTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeEnvironmentDebugmask.ApigeeEnvironmentDebugmaskTimeouts">ApigeeEnvironmentDebugmaskTimeouts</a>

---



