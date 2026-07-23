# `iapAgentRegistryMcpServerIamPolicy` Submodule <a name="`iapAgentRegistryMcpServerIamPolicy` Submodule" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IapAgentRegistryMcpServerIamPolicy <a name="IapAgentRegistryMcpServerIamPolicy" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_policy google_iap_agent_registry_mcp_server_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.Initializer"></a>

```typescript
import { iapAgentRegistryMcpServerIamPolicy } from '@cdktn/provider-google'

new iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy(scope: Construct, id: string, config: IapAgentRegistryMcpServerIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicyConfig">IapAgentRegistryMcpServerIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicyConfig">IapAgentRegistryMcpServerIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IapAgentRegistryMcpServerIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.isConstruct"></a>

```typescript
import { iapAgentRegistryMcpServerIamPolicy } from '@cdktn/provider-google'

iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.isTerraformElement"></a>

```typescript
import { iapAgentRegistryMcpServerIamPolicy } from '@cdktn/provider-google'

iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.isTerraformResource"></a>

```typescript
import { iapAgentRegistryMcpServerIamPolicy } from '@cdktn/provider-google'

iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.generateConfigForImport"></a>

```typescript
import { iapAgentRegistryMcpServerIamPolicy } from '@cdktn/provider-google'

iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IapAgentRegistryMcpServerIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IapAgentRegistryMcpServerIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IapAgentRegistryMcpServerIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IapAgentRegistryMcpServerIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.mcpServerIdInput">mcpServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.policyDataInput">policyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.mcpServerId">mcpServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `mcpServerIdInput`<sup>Optional</sup> <a name="mcpServerIdInput" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.mcpServerIdInput"></a>

```typescript
public readonly mcpServerIdInput: string;
```

- *Type:* string

---

##### `policyDataInput`<sup>Optional</sup> <a name="policyDataInput" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.policyDataInput"></a>

```typescript
public readonly policyDataInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `mcpServerId`<sup>Required</sup> <a name="mcpServerId" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.mcpServerId"></a>

```typescript
public readonly mcpServerId: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IapAgentRegistryMcpServerIamPolicyConfig <a name="IapAgentRegistryMcpServerIamPolicyConfig" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicyConfig.Initializer"></a>

```typescript
import { iapAgentRegistryMcpServerIamPolicy } from '@cdktn/provider-google'

const iapAgentRegistryMcpServerIamPolicyConfig: iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicyConfig.property.mcpServerId">mcpServerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_policy#mcp_server_id IapAgentRegistryMcpServerIamPolicy#mcp_server_id}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicyConfig.property.policyData">policyData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_policy#policy_data IapAgentRegistryMcpServerIamPolicy#policy_data}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_policy#id IapAgentRegistryMcpServerIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicyConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_policy#location IapAgentRegistryMcpServerIamPolicy#location}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_policy#project IapAgentRegistryMcpServerIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `mcpServerId`<sup>Required</sup> <a name="mcpServerId" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicyConfig.property.mcpServerId"></a>

```typescript
public readonly mcpServerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_policy#mcp_server_id IapAgentRegistryMcpServerIamPolicy#mcp_server_id}.

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicyConfig.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_policy#policy_data IapAgentRegistryMcpServerIamPolicy#policy_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_policy#id IapAgentRegistryMcpServerIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_policy#location IapAgentRegistryMcpServerIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.iapAgentRegistryMcpServerIamPolicy.IapAgentRegistryMcpServerIamPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_mcp_server_iam_policy#project IapAgentRegistryMcpServerIamPolicy#project}.

---



