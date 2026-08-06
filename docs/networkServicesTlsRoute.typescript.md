# `networkServicesTlsRoute` Submodule <a name="`networkServicesTlsRoute` Submodule" id="@cdktn/provider-google.networkServicesTlsRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesTlsRoute <a name="NetworkServicesTlsRoute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_tls_route google_network_services_tls_route}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer"></a>

```typescript
import { networkServicesTlsRoute } from '@cdktn/provider-google'

new networkServicesTlsRoute.NetworkServicesTlsRoute(scope: Construct, id: string, config: NetworkServicesTlsRouteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig">NetworkServicesTlsRouteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig">NetworkServicesTlsRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.resetGateways">resetGateways</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.resetMeshes">resetMeshes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.resetTargetProxies">resetTargetProxies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.putRules"></a>

```typescript
public putRules(value: IResolvable | NetworkServicesTlsRouteRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRules">NetworkServicesTlsRouteRules</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkServicesTlsRouteTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeouts">NetworkServicesTlsRouteTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGateways` <a name="resetGateways" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.resetGateways"></a>

```typescript
public resetGateways(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetMeshes` <a name="resetMeshes" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.resetMeshes"></a>

```typescript
public resetMeshes(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTargetProxies` <a name="resetTargetProxies" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.resetTargetProxies"></a>

```typescript
public resetTargetProxies(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkServicesTlsRoute resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.isConstruct"></a>

```typescript
import { networkServicesTlsRoute } from '@cdktn/provider-google'

networkServicesTlsRoute.NetworkServicesTlsRoute.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.isTerraformElement"></a>

```typescript
import { networkServicesTlsRoute } from '@cdktn/provider-google'

networkServicesTlsRoute.NetworkServicesTlsRoute.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.isTerraformResource"></a>

```typescript
import { networkServicesTlsRoute } from '@cdktn/provider-google'

networkServicesTlsRoute.NetworkServicesTlsRoute.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.generateConfigForImport"></a>

```typescript
import { networkServicesTlsRoute } from '@cdktn/provider-google'

networkServicesTlsRoute.NetworkServicesTlsRoute.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetworkServicesTlsRoute resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkServicesTlsRoute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkServicesTlsRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_tls_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesTlsRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList">NetworkServicesTlsRouteRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference">NetworkServicesTlsRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.gatewaysInput">gatewaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.meshesInput">meshesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.rulesInput">rulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRules">NetworkServicesTlsRouteRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.targetProxiesInput">targetProxiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeouts">NetworkServicesTlsRouteTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.gateways">gateways</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.meshes">meshes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.targetProxies">targetProxies</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.rules"></a>

```typescript
public readonly rules: NetworkServicesTlsRouteRulesList;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList">NetworkServicesTlsRouteRulesList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkServicesTlsRouteTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference">NetworkServicesTlsRouteTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `gatewaysInput`<sup>Optional</sup> <a name="gatewaysInput" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.gatewaysInput"></a>

```typescript
public readonly gatewaysInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `meshesInput`<sup>Optional</sup> <a name="meshesInput" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.meshesInput"></a>

```typescript
public readonly meshesInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | NetworkServicesTlsRouteRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRules">NetworkServicesTlsRouteRules</a>[]

---

##### `targetProxiesInput`<sup>Optional</sup> <a name="targetProxiesInput" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.targetProxiesInput"></a>

```typescript
public readonly targetProxiesInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkServicesTlsRouteTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeouts">NetworkServicesTlsRouteTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `gateways`<sup>Required</sup> <a name="gateways" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.gateways"></a>

```typescript
public readonly gateways: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `meshes`<sup>Required</sup> <a name="meshes" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.meshes"></a>

```typescript
public readonly meshes: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `targetProxies`<sup>Required</sup> <a name="targetProxies" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.targetProxies"></a>

```typescript
public readonly targetProxies: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesTlsRouteConfig <a name="NetworkServicesTlsRouteConfig" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.Initializer"></a>

```typescript
import { networkServicesTlsRoute } from '@cdktn/provider-google'

const networkServicesTlsRouteConfig: networkServicesTlsRoute.NetworkServicesTlsRouteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.name">name</a></code> | <code>string</code> | Name of the TlsRoute resource. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.rules">rules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRules">NetworkServicesTlsRouteRules</a>[]</code> | rules block. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.description">description</a></code> | <code>string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.gateways">gateways</a></code> | <code>string[]</code> | Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_tls_route#id NetworkServicesTlsRoute#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.location">location</a></code> | <code>string</code> | Location (region) of the TLS Route. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.meshes">meshes</a></code> | <code>string[]</code> | Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_tls_route#project NetworkServicesTlsRoute#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.targetProxies">targetProxies</a></code> | <code>string[]</code> | TargetProxies defines a list of target proxies this TlsRoute is attached to, as one of the routing rules to route the requests served by the load balancer. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeouts">NetworkServicesTlsRouteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the TlsRoute resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_tls_route#name NetworkServicesTlsRoute#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.rules"></a>

```typescript
public readonly rules: IResolvable | NetworkServicesTlsRouteRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRules">NetworkServicesTlsRouteRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_tls_route#rules NetworkServicesTlsRoute#rules}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_tls_route#deletion_policy NetworkServicesTlsRoute#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_tls_route#description NetworkServicesTlsRoute#description}

---

##### `gateways`<sup>Optional</sup> <a name="gateways" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.gateways"></a>

```typescript
public readonly gateways: string[];
```

- *Type:* string[]

Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway.

Each gateway reference should match the pattern: projects/* /locations/* /gateways/<gateway_name>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_tls_route#gateways NetworkServicesTlsRoute#gateways}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_tls_route#id NetworkServicesTlsRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location (region) of the TLS Route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_tls_route#location NetworkServicesTlsRoute#location}

---

##### `meshes`<sup>Optional</sup> <a name="meshes" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.meshes"></a>

```typescript
public readonly meshes: string[];
```

- *Type:* string[]

Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh.

Each mesh reference should match the pattern: projects/* /locations/* /meshes/<mesh_name>
The attached Mesh should be of a type SIDECAR

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_tls_route#meshes NetworkServicesTlsRoute#meshes}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_tls_route#project NetworkServicesTlsRoute#project}.

---

##### `targetProxies`<sup>Optional</sup> <a name="targetProxies" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.targetProxies"></a>

```typescript
public readonly targetProxies: string[];
```

- *Type:* string[]

TargetProxies defines a list of target proxies this TlsRoute is attached to, as one of the routing rules to route the requests served by the load balancer.

Each target proxy reference should match the pattern: projects/* /locations/global/targetTcpProxies/<target_tcp_proxy_name>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_tls_route#target_proxies NetworkServicesTlsRoute#target_proxies}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkServicesTlsRouteTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeouts">NetworkServicesTlsRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_tls_route#timeouts NetworkServicesTlsRoute#timeouts}

---

### NetworkServicesTlsRouteRules <a name="NetworkServicesTlsRouteRules" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRules.Initializer"></a>

```typescript
import { networkServicesTlsRoute } from '@cdktn/provider-google'

const networkServicesTlsRouteRules: networkServicesTlsRoute.NetworkServicesTlsRouteRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRules.property.action">action</a></code> | <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesAction">NetworkServicesTlsRouteRulesAction</a></code> | action block. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRules.property.matches">matches</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatches">NetworkServicesTlsRouteRulesMatches</a>[]</code> | matches block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRules.property.action"></a>

```typescript
public readonly action: NetworkServicesTlsRouteRulesAction;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesAction">NetworkServicesTlsRouteRulesAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_tls_route#action NetworkServicesTlsRoute#action}

---

##### `matches`<sup>Required</sup> <a name="matches" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRules.property.matches"></a>

```typescript
public readonly matches: IResolvable | NetworkServicesTlsRouteRulesMatches[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatches">NetworkServicesTlsRouteRulesMatches</a>[]

matches block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_tls_route#matches NetworkServicesTlsRoute#matches}

---

### NetworkServicesTlsRouteRulesAction <a name="NetworkServicesTlsRouteRulesAction" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesAction.Initializer"></a>

```typescript
import { networkServicesTlsRoute } from '@cdktn/provider-google'

const networkServicesTlsRouteRulesAction: networkServicesTlsRoute.NetworkServicesTlsRouteRulesAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesAction.property.destinations">destinations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinations">NetworkServicesTlsRouteRulesActionDestinations</a>[]</code> | destinations block. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesAction.property.destinations"></a>

```typescript
public readonly destinations: IResolvable | NetworkServicesTlsRouteRulesActionDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinations">NetworkServicesTlsRouteRulesActionDestinations</a>[]

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_tls_route#destinations NetworkServicesTlsRoute#destinations}

---

### NetworkServicesTlsRouteRulesActionDestinations <a name="NetworkServicesTlsRouteRulesActionDestinations" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinations.Initializer"></a>

```typescript
import { networkServicesTlsRoute } from '@cdktn/provider-google'

const networkServicesTlsRouteRulesActionDestinations: networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinations.property.serviceName">serviceName</a></code> | <code>string</code> | The URL of a BackendService to route traffic to. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinations.property.weight">weight</a></code> | <code>number</code> | Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. |

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinations.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The URL of a BackendService to route traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_tls_route#service_name NetworkServicesTlsRoute#service_name}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinations.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Specifies the proportion of requests forwarded to the backend referenced by the serviceName field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_tls_route#weight NetworkServicesTlsRoute#weight}

---

### NetworkServicesTlsRouteRulesMatches <a name="NetworkServicesTlsRouteRulesMatches" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatches"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatches.Initializer"></a>

```typescript
import { networkServicesTlsRoute } from '@cdktn/provider-google'

const networkServicesTlsRouteRulesMatches: networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatches = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatches.property.alpn">alpn</a></code> | <code>string[]</code> | ALPN (Application-Layer Protocol Negotiation) to match against. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatches.property.sniHost">sniHost</a></code> | <code>string[]</code> | SNI (server name indicator) to match against. |

---

##### `alpn`<sup>Optional</sup> <a name="alpn" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatches.property.alpn"></a>

```typescript
public readonly alpn: string[];
```

- *Type:* string[]

ALPN (Application-Layer Protocol Negotiation) to match against.

Examples: "http/1.1", "h2". At least one of sniHost and alpn is required. Up to 5 alpns across all matches can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_tls_route#alpn NetworkServicesTlsRoute#alpn}

---

##### `sniHost`<sup>Optional</sup> <a name="sniHost" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatches.property.sniHost"></a>

```typescript
public readonly sniHost: string[];
```

- *Type:* string[]

SNI (server name indicator) to match against.

SNI will be matched against all wildcard domains, i.e. www.example.com will be first matched against www.example.com, then *.example.com, then *.com.
Partial wildcards are not supported, and values like *w.example.com are invalid. At least one of sniHost and alpn is required. Up to 5 sni hosts across all matches can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_tls_route#sni_host NetworkServicesTlsRoute#sni_host}

---

### NetworkServicesTlsRouteTimeouts <a name="NetworkServicesTlsRouteTimeouts" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeouts.Initializer"></a>

```typescript
import { networkServicesTlsRoute } from '@cdktn/provider-google'

const networkServicesTlsRouteTimeouts: networkServicesTlsRoute.NetworkServicesTlsRouteTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_tls_route#create NetworkServicesTlsRoute#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_tls_route#delete NetworkServicesTlsRoute#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_tls_route#update NetworkServicesTlsRoute#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_tls_route#create NetworkServicesTlsRoute#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_tls_route#delete NetworkServicesTlsRoute#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_tls_route#update NetworkServicesTlsRoute#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesTlsRouteRulesActionDestinationsList <a name="NetworkServicesTlsRouteRulesActionDestinationsList" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.Initializer"></a>

```typescript
import { networkServicesTlsRoute } from '@cdktn/provider-google'

new networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.get"></a>

```typescript
public get(index: number): NetworkServicesTlsRouteRulesActionDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinations">NetworkServicesTlsRouteRulesActionDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesTlsRouteRulesActionDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinations">NetworkServicesTlsRouteRulesActionDestinations</a>[]

---


### NetworkServicesTlsRouteRulesActionDestinationsOutputReference <a name="NetworkServicesTlsRouteRulesActionDestinationsOutputReference" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.Initializer"></a>

```typescript
import { networkServicesTlsRoute } from '@cdktn/provider-google'

new networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceName` <a name="resetServiceName" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.resetServiceName"></a>

```typescript
public resetServiceName(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinations">NetworkServicesTlsRouteRulesActionDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesTlsRouteRulesActionDestinations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinations">NetworkServicesTlsRouteRulesActionDestinations</a>

---


### NetworkServicesTlsRouteRulesActionOutputReference <a name="NetworkServicesTlsRouteRulesActionOutputReference" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.Initializer"></a>

```typescript
import { networkServicesTlsRoute } from '@cdktn/provider-google'

new networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.resetDestinations">resetDestinations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinations` <a name="putDestinations" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.putDestinations"></a>

```typescript
public putDestinations(value: IResolvable | NetworkServicesTlsRouteRulesActionDestinations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.putDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinations">NetworkServicesTlsRouteRulesActionDestinations</a>[]

---

##### `resetDestinations` <a name="resetDestinations" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.resetDestinations"></a>

```typescript
public resetDestinations(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList">NetworkServicesTlsRouteRulesActionDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.property.destinationsInput">destinationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinations">NetworkServicesTlsRouteRulesActionDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesAction">NetworkServicesTlsRouteRulesAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.property.destinations"></a>

```typescript
public readonly destinations: NetworkServicesTlsRouteRulesActionDestinationsList;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList">NetworkServicesTlsRouteRulesActionDestinationsList</a>

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.property.destinationsInput"></a>

```typescript
public readonly destinationsInput: IResolvable | NetworkServicesTlsRouteRulesActionDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinations">NetworkServicesTlsRouteRulesActionDestinations</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesTlsRouteRulesAction;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesAction">NetworkServicesTlsRouteRulesAction</a>

---


### NetworkServicesTlsRouteRulesList <a name="NetworkServicesTlsRouteRulesList" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.Initializer"></a>

```typescript
import { networkServicesTlsRoute } from '@cdktn/provider-google'

new networkServicesTlsRoute.NetworkServicesTlsRouteRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.get"></a>

```typescript
public get(index: number): NetworkServicesTlsRouteRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRules">NetworkServicesTlsRouteRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesTlsRouteRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRules">NetworkServicesTlsRouteRules</a>[]

---


### NetworkServicesTlsRouteRulesMatchesList <a name="NetworkServicesTlsRouteRulesMatchesList" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.Initializer"></a>

```typescript
import { networkServicesTlsRoute } from '@cdktn/provider-google'

new networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.get"></a>

```typescript
public get(index: number): NetworkServicesTlsRouteRulesMatchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatches">NetworkServicesTlsRouteRulesMatches</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesTlsRouteRulesMatches[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatches">NetworkServicesTlsRouteRulesMatches</a>[]

---


### NetworkServicesTlsRouteRulesMatchesOutputReference <a name="NetworkServicesTlsRouteRulesMatchesOutputReference" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.Initializer"></a>

```typescript
import { networkServicesTlsRoute } from '@cdktn/provider-google'

new networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.resetAlpn">resetAlpn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.resetSniHost">resetSniHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlpn` <a name="resetAlpn" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.resetAlpn"></a>

```typescript
public resetAlpn(): void
```

##### `resetSniHost` <a name="resetSniHost" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.resetSniHost"></a>

```typescript
public resetSniHost(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.property.alpnInput">alpnInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.property.sniHostInput">sniHostInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.property.alpn">alpn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.property.sniHost">sniHost</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatches">NetworkServicesTlsRouteRulesMatches</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alpnInput`<sup>Optional</sup> <a name="alpnInput" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.property.alpnInput"></a>

```typescript
public readonly alpnInput: string[];
```

- *Type:* string[]

---

##### `sniHostInput`<sup>Optional</sup> <a name="sniHostInput" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.property.sniHostInput"></a>

```typescript
public readonly sniHostInput: string[];
```

- *Type:* string[]

---

##### `alpn`<sup>Required</sup> <a name="alpn" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.property.alpn"></a>

```typescript
public readonly alpn: string[];
```

- *Type:* string[]

---

##### `sniHost`<sup>Required</sup> <a name="sniHost" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.property.sniHost"></a>

```typescript
public readonly sniHost: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesTlsRouteRulesMatches;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatches">NetworkServicesTlsRouteRulesMatches</a>

---


### NetworkServicesTlsRouteRulesOutputReference <a name="NetworkServicesTlsRouteRulesOutputReference" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.Initializer"></a>

```typescript
import { networkServicesTlsRoute } from '@cdktn/provider-google'

new networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.putMatches">putMatches</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.putAction"></a>

```typescript
public putAction(value: NetworkServicesTlsRouteRulesAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesAction">NetworkServicesTlsRouteRulesAction</a>

---

##### `putMatches` <a name="putMatches" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.putMatches"></a>

```typescript
public putMatches(value: IResolvable | NetworkServicesTlsRouteRulesMatches[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.putMatches.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatches">NetworkServicesTlsRouteRulesMatches</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.property.action">action</a></code> | <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference">NetworkServicesTlsRouteRulesActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.property.matches">matches</a></code> | <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList">NetworkServicesTlsRouteRulesMatchesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesAction">NetworkServicesTlsRouteRulesAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.property.matchesInput">matchesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatches">NetworkServicesTlsRouteRulesMatches</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRules">NetworkServicesTlsRouteRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.property.action"></a>

```typescript
public readonly action: NetworkServicesTlsRouteRulesActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference">NetworkServicesTlsRouteRulesActionOutputReference</a>

---

##### `matches`<sup>Required</sup> <a name="matches" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.property.matches"></a>

```typescript
public readonly matches: NetworkServicesTlsRouteRulesMatchesList;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList">NetworkServicesTlsRouteRulesMatchesList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: NetworkServicesTlsRouteRulesAction;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesAction">NetworkServicesTlsRouteRulesAction</a>

---

##### `matchesInput`<sup>Optional</sup> <a name="matchesInput" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.property.matchesInput"></a>

```typescript
public readonly matchesInput: IResolvable | NetworkServicesTlsRouteRulesMatches[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatches">NetworkServicesTlsRouteRulesMatches</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesTlsRouteRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRules">NetworkServicesTlsRouteRules</a>

---


### NetworkServicesTlsRouteTimeoutsOutputReference <a name="NetworkServicesTlsRouteTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkServicesTlsRoute } from '@cdktn/provider-google'

new networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeouts">NetworkServicesTlsRouteTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesTlsRouteTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeouts">NetworkServicesTlsRouteTimeouts</a>

---



